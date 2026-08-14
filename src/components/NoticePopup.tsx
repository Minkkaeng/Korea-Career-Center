import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideDate = localStorage.getItem('hideNoticeUntil');
    if (hideDate) {
      if (new Date() < new Date(hideDate)) {
        return;
      }
    }
    setIsOpen(true);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleHideToday = () => {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem('hideNoticeUntil', tomorrow.toISOString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Popup Content */}
      <div className="relative bg-bg-sub rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
        <div className="bg-accent text-bg-main p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">한국진로커리어센터<br/>홈페이지 개설</h2>
        </div>
        
        <div className="p-8 text-center bg-bg-sub">
          <p className="text-text-sub leading-relaxed mb-8">
            새롭게 단장한 한국진로커리어센터 홈페이지에 오신 것을 환영합니다.<br/><br/>
            4차 산업혁명 시대에 맞는 최적의 진로 및 취업 지원 서비스를 제공하겠습니다.
          </p>
          
          <button 
            onClick={handleClose}
            className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-text-main font-bold rounded-xl transition-colors mb-4"
          >
            확인
          </button>
          
          <div className="flex items-center justify-center gap-2">
            <input 
              type="checkbox" 
              id="hideToday" 
              className="w-4 h-4 rounded border-white/20 bg-bg-main text-accent focus:ring-accent focus:ring-offset-bg-sub"
              onChange={(e) => {
                if(e.target.checked) handleHideToday();
              }}
            />
            <label htmlFor="hideToday" className="text-sm text-text-sub cursor-pointer">오늘 하루 보지 않기</label>
          </div>
        </div>
      </div>
    </div>
  );
}
