import { MapPin, Phone, Mail, Clock, Navigation, Subtitles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* Hero */}
      <div className="bg-white pt-24 pb-16 border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Location & Contact</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">오시는 길 · 문의</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            도움이 필요하신가요? 언제든 편하게 방문하시거나 연락해주세요.
          </p>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto px-6 mt-12 relative z-20">
        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-lg p-10 border border-slate-200 shadow-sm flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-10 border-b border-slate-100 pb-4">
                고객 센터
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 mb-1 tracking-wide">대표 번호</h3>
                    <p className="text-2xl font-black text-slate-900">02-1234-5678</p>
                    <p className="text-sm text-slate-500 mt-2 font-medium">상담가능: 평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 mb-1 tracking-wide">이메일 문의</h3>
                    <p className="text-lg font-bold text-slate-900">help@hankukcareer.com</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 mb-1 tracking-wide">운영 시간</h3>
                    <p className="text-lg font-bold text-slate-900">월~금 09:00 - 18:00</p>
                    <p className="text-sm text-red-600 font-bold mt-1">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Location Panel */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Map Area */}
            <div className="bg-white rounded-lg border border-slate-200 p-2 h-[400px] lg:h-[450px] relative overflow-hidden shadow-sm">
              <div className="absolute inset-2 rounded bg-slate-100 overflow-hidden border border-slate-200">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                {/* Fake Roads */}
                <div className="absolute top-1/2 w-full h-12 bg-white -rotate-6 transform -translate-y-1/2 flex items-center justify-center border-y border-slate-200">
                  <div className="w-full border-t-2 border-dashed border-slate-300"></div>
                </div>
                <div className="absolute left-1/3 h-full w-12 bg-white rotate-12 flex justify-center border-x border-slate-200">
                  <div className="h-full border-l-2 border-dashed border-slate-300"></div>
                </div>
                
                {/* Marker Container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="bg-slate-900 px-4 py-2 rounded shadow-md mb-2 flex items-center gap-2 whitespace-nowrap">
                    <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
                    <span className="font-bold text-white text-sm">한국진로커리어센터</span>
                  </div>
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-5 h-5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Map Overlay Button */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                <button className="bg-white px-5 py-3 rounded border border-slate-200 text-slate-800 font-bold text-[14px] shadow-sm hover:bg-slate-50 flex items-center gap-2 transition-colors">
                  <Navigation className="w-4 h-4 text-[#1e3a8a]" />
                  카카오맵 길찾기
                </button>
              </div>
            </div>

            {/* Address Details */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
              <div>
                <h3 className="text-[12px] font-bold text-slate-500 mb-2 tracking-widest uppercase">센터 주소</h3>
                <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1e3a8a]" />
                  서울특별시 테헤란로 123, 커리어빌딩 4층
                </p>
                <p className="text-sm font-medium text-slate-600 mt-3 sm:ml-7 bg-slate-50 border border-slate-200 inline-block px-3 py-1.5 rounded">
                  <Subtitles className="w-4 h-4 inline-block mr-1 text-slate-400" /> 지하철 2호선 역삼역 3번 출구 도보 5분
                </p>
              </div>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("서울특별시 테헤란로 123, 커리어빌딩 4층");
                  alert("주소가 복사되었습니다.");
                }}
                className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-300 hover:border-[#1e3a8a] text-slate-700 hover:text-[#1e3a8a] font-bold rounded transition-colors whitespace-nowrap shadow-sm"
              >
                주소 복사
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
