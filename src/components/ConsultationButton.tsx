import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConsultationButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-accent hover:bg-[#00b085] text-bg-main shadow-[0_10px_25px_rgba(0,200,151,0.4)] transition-transform hover:scale-110 z-50 relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Popup Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-bg-sub rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-40 animate-in slide-in-from-bottom-5">
          <div className="bg-accent p-5 text-bg-main">
            <h3 className="font-bold text-lg">무엇을 도와드릴까요?</h3>
            <p className="text-sm opacity-90 mt-1">AI 맞춤형 진로상담 및 문의</p>
          </div>
          
          <div className="p-5 space-y-4">
            <Link 
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="bg-accent/20 text-accent p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="font-bold text-text-main text-sm">온라인 상담 신청</div>
                <div className="text-xs text-text-sub mt-0.5">전문 컨설턴트가 답변해 드립니다</div>
              </div>
            </Link>

            <a 
              href="tel:0000-0000"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent-sub/50 transition-all group"
            >
              <div className="bg-accent-sub/20 text-accent-sub p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-bold text-text-main text-sm">전화 문의</div>
                <div className="text-xs text-text-sub mt-0.5">평일 09:00 - 18:00</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
