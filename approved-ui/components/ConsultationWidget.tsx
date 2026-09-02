import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Mail, MessageSquare } from 'lucide-react';

function RobotVideoAvatar({ className = "w-full h-full" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(true);

  const videoSrc = `/images/chatbot/video_1.mp4`;

  const frameUrls = [
    '/images/chatbot/frame1.png',
    '/images/chatbot/frame2.png',
    '/images/chatbot/frame3.png',
    '/images/chatbot/frame4.jpg',
    '/images/chatbot/frame5.jpg',
    '/images/chatbot/frame6.jpg',
  ];

  useEffect(() => {
    if (useVideo) return; // Video mode active

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let imagesLoaded = 0;
    const images: HTMLImageElement[] = [];

    frameUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imagesLoaded++;
      };
      images[i] = img;
    });

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsed = (time - startTime) / 1000; // seconds
      const cycleDuration = 12.0; // 12초 여유로운 루프 (각 프레임 약 2초간 유지)
      const normTime = (elapsed % cycleDuration) / cycleDuration; // 0.0 ~ 1.0

      const pos = normTime * 6; // 0.0 ~ 6.0
      const idx1 = Math.floor(pos) % 6;
      const idx2 = (idx1 + 1) % 6;
      let alpha = pos - Math.floor(pos);

      // Smooth cosine easing for video-like motion transition
      alpha = 0.5 - Math.cos(alpha * Math.PI) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render video background base
      ctx.fillStyle = '#0f2942';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const drawAspectCover = (img: HTMLImageElement) => {
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;
        let drawW = canvas.width;
        let drawH = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (imgAspect > canvasAspect) {
          drawW = canvas.height * imgAspect;
          drawX = (canvas.width - drawW) / 2;
        } else {
          drawH = canvas.width / imgAspect;
          drawY = (canvas.height - drawH) / 2;
        }
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      };

      if (imagesLoaded >= 2) {
        const img1 = images[idx1];
        const img2 = images[idx2];

        if (img1 && img1.complete && img1.naturalWidth > 0) {
          ctx.globalAlpha = 1.0;
          drawAspectCover(img1);
        }

        if (img2 && img2.complete && img2.naturalWidth > 0 && alpha > 0.01) {
          ctx.globalAlpha = alpha;
          drawAspectCover(img2);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [useVideo]);

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {useVideo ? (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          onError={() => setUseVideo(false)}
          className="w-full h-full object-cover"
        />
      ) : (
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: '안녕하세요! 한국진로커리어센터 AI 챗봇입니다. 궁금하신 점을 물어보시거나 아래 상담 채널을 이용해 주세요.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = inputValue.trim();
    if (!message || isSending) return;

    setMessages(prev => [...prev, { role: 'user', text: message }]);
    setInputValue('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const result = await response.json().catch(() => ({})) as { answer?: string; error?: string };
      setMessages(prev => [...prev, {
        role: 'ai',
        text: response.ok && result.answer ? result.answer : (result.error || '현재 답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'ai',
        text: '챗봇 연결 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Widget Panel */}
      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white rounded-2xl shadow-2xl mb-4 border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f2942] to-[#1a4b77] p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 shrink-0 bg-slate-900 shadow-inner relative">
                <RobotVideoAvatar className="w-full h-full" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">AI 커리어 챗봇</h3>
                <span className="text-[11px] text-[#7de2d1] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7de2d1] animate-pulse"></span>
                  온라인 상담 가능
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions (SNS) */}
          <div className="bg-slate-50 p-3 grid grid-cols-3 gap-2 border-b border-slate-100 shrink-0">
            <span aria-disabled="true" className="flex cursor-not-allowed flex-col items-center justify-center gap-1 rounded-xl bg-[#FEE500] p-2 text-[11px] font-medium text-[#000000] opacity-70">
              <MessageSquare className="w-4 h-4" />
              카카오톡 준비 중
            </span>
            <span aria-disabled="true" className="flex cursor-not-allowed flex-col items-center justify-center gap-1 rounded-xl bg-[#03C75A] p-2 text-[11px] font-medium text-white opacity-70">
              <MessageSquare className="w-4 h-4" />
              네이버 톡톡 준비 중
            </span>
            <a href="mailto:sangoabaram@gmail.com" className="flex flex-col items-center justify-center gap-1 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium text-[11px]">
              <Mail className="w-4 h-4" />
              이메일 문의
            </a>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0f2942] text-white rounded-tr-sm' 
                    : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 shrink-0 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="궁금한 점을 자유롭게 물어보세요."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-[14px] outline-none focus:border-[#0f2942] focus:bg-white transition-colors"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isSending}
              className="w-10 h-10 bg-[#0f2942] disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center transition-colors"
            >
              <Send className={`w-4 h-4 ml-0.5 ${isSending ? 'animate-pulse' : ''}`} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-20 h-20 rounded-full border-4 border-[#1e3a8a] shadow-none overflow-hidden bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
            <RobotVideoAvatar className="w-full h-full" />
          </div>
        </button>
      )}
    </div>
  );
}
