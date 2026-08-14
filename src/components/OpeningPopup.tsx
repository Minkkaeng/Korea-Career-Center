import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function OpeningPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if 'hidePopup' is set in localStorage and hasn't expired
    const hidePopupUntil = localStorage.getItem('hideOpeningPopupUntil');
    if (hidePopupUntil && new Date().getTime() < parseInt(hidePopupUntil, 10)) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const closeForToday = () => {
    // Set expiration to 24 hours from now
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    localStorage.setItem('hideOpeningPopupUntil', expirationTime.toString());
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#0f2942] p-6 text-white shrink-0">
          <div className="flex justify-between items-start">
            <div>
              <span className="inline-block px-3 py-1 bg-[#7de2d1]/20 text-[#7de2d1] text-xs font-extrabold tracking-wider rounded-full mb-3">
                NOTICE
              </span>
              <h2 className="text-2xl font-bold leading-tight">한국진로커리어센터<br/>홈페이지 오픈 안내</h2>
            </div>
            <button 
              onClick={closePopup}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-6 md:p-8 overflow-y-auto text-[#475569] leading-relaxed text-[15px] space-y-4">
          <p>
            안녕하세요, <strong className="text-[#0f2942]">한국진로커리어센터</strong>입니다.
          </p>
          <p>
            저희 센터는 4차 산업혁명 시대의 급변하는 직업 생태계 속에서, 데이터 기반의 초개인화 진로 솔루션과 현장 맞춤형 실무 역량 강화 교육을 통해 구직자 여러분의 성공적인 커리어 설계를 돕고자 공식 홈페이지를 오픈하게 되었습니다.
          </p>
          <p>
            앞으로 이곳을 통해 다음과 같은 유익한 정보를 제공해 드릴 예정입니다.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#334155] font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
            <li>AI 활용 맞춤형 진로상담 및 진단 프로그램 안내</li>
            <li>청년 취업역량강화 교육 과정 공지 및 신청</li>
            <li>최신 산업 동향 및 NCS 기반 직업 정보 제공</li>
            <li>기업 채용 컨설팅 및 특강·위탁교육 의뢰</li>
          </ul>
          <p>
            기술과 사람을 잇는 든든한 파트너로서, 여러분의 꿈이 현실이 될 수 있도록 최선을 다하겠습니다.<br/>
            많은 관심과 성원 부탁드립니다. 감사합니다.
          </p>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-700 transition-colors">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-slate-300 text-[#0f2942] focus:ring-[#0f2942]"
              onChange={(e) => {
                if (e.target.checked) closeForToday();
              }}
            />
            오늘 하루 보지 않기
          </label>
          <button 
            onClick={closePopup}
            className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
