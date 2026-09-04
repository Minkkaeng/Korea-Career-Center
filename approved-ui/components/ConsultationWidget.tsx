import { useEffect, useRef, useState } from 'react';
import { X, Send, Mail, MessageSquare } from 'lucide-react';

function RobotVideoAvatar({ className = 'h-full w-full' }: { className?: string }) {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setMotionAllowed(!reducedMotion.matches);

    updateMotionPreference();
    reducedMotion.addEventListener('change', updateMotionPreference);

    return () => reducedMotion.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <span className={`relative block overflow-hidden bg-slate-900 ${className}`} aria-hidden="true">
      {motionAllowed && videoAvailable ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          poster="/images/chatbot/frame1.png"
          onError={() => setVideoAvailable(false)}
          className="h-full w-full object-cover"
        >
          <source src="/images/chatbot/video_1.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/images/chatbot/frame1.png"
          alt=""
          className="h-full w-full object-cover"
        />
      )}
    </span>
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
        <div className="h-[550px] w-[calc(100vw-56px)] max-w-[360px] bg-white rounded-2xl shadow-2xl mb-4 border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f2942] to-[#1a4b77] p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white/30 bg-slate-900 shadow-inner" aria-hidden="true">
                <RobotVideoAvatar />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">AI 커리어 챗봇</h3>
                <span className="text-[11px] text-[#7de2d1] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7de2d1] animate-pulse"></span>
                  온라인 상담 가능
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="AI 커리어 챗봇 닫기" className="p-1 hover:bg-white/10 rounded-full transition-colors">
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
          aria-label="AI 커리어 챗봇 열기"
          className="relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-[#1e3a8a] bg-white shadow-none"
        >
          <RobotVideoAvatar className="h-full w-full rounded-full" />
        </button>
      )}
    </div>
  );
}
