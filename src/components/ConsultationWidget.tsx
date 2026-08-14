import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Mail, MessageSquare } from 'lucide-react';

export default function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: '안녕하세요! 한국진로커리어센터 AI 챗봇입니다. 궁금하신 점을 물어보시거나 아래 상담 채널을 이용해 주세요.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: '상담원 연결이 필요하신 경우 아래 카카오톡 또는 네이버 톡톡 버튼을 클릭해 주세요. API 연동을 통해 곧 더 똑똑한 AI로 찾아뵙겠습니다!' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Widget Panel */}
      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white rounded-2xl shadow-2xl mb-4 border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f2942] to-[#1a4b77] p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6 text-[#7de2d1]" />
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
            <a href="#" className="flex flex-col items-center justify-center gap-1 p-2 bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#000000] rounded-xl transition-colors font-medium text-[11px]">
              <MessageSquare className="w-4 h-4" />
              카카오톡
            </a>
            <a href="#" className="flex flex-col items-center justify-center gap-1 p-2 bg-[#03C75A] hover:bg-[#03C75A]/90 text-white rounded-xl transition-colors font-medium text-[11px]">
              <MessageSquare className="w-4 h-4" />
              네이버 톡톡
            </a>
            <a href="mailto:contact@hankukjinrocareercenter.com" className="flex flex-col items-center justify-center gap-1 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium text-[11px]">
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
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-[#0f2942] disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-tr from-[#0f2942] to-[#1a4b77] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 group border-2 border-white/20"
        >
          <MessageCircle className="w-7 h-7 group-hover:-rotate-12 transition-transform" />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      )}
    </div>
  );
}
