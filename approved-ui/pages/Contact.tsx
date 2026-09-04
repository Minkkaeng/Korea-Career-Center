import { MapPin, Phone, Mail, Clock, Subtitles } from 'lucide-react';
import KakaoMap from '../components/KakaoMap';

const CENTER_ADDRESS = '경기도 성남시 수정구 성남대로 1275-1, 5층 A1013호';
const CENTER_ADDRESS_DETAIL = '태평동, 익정빌딩';

export default function Contact() {
  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 md:pt-6 relative z-20">
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
                    <a className="text-2xl font-black text-slate-900 hover:text-[#1e3a8a]" href="tel:010-8489-3944">
                      010-8489-3944
                    </a>
                    <p className="text-sm text-slate-500 mt-2 font-medium">상담가능: 평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-500 mb-1 tracking-wide">이메일 문의</h3>
                    <a className="text-lg font-bold text-slate-900 hover:text-[#1e3a8a]" href="mailto:sangoabaram@gmail.com">sangoabaram@gmail.com</a>
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
              <KakaoMap address={CENTER_ADDRESS} placeName="한국진로커리어센터" />
            </div>

            {/* Address Details */}
            <div className="bg-white rounded-lg p-8 border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-sm">
              <div>
                <h3 className="text-[12px] font-bold text-slate-500 mb-2 tracking-widest uppercase">센터 주소</h3>
                <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1e3a8a]" />
                  {CENTER_ADDRESS}
                </p>
                <p className="text-sm font-medium text-slate-600 mt-3 sm:ml-7 bg-slate-50 border border-slate-200 inline-block px-3 py-1.5 rounded">
                  <Subtitles className="w-4 h-4 inline-block mr-1 text-slate-400" /> {CENTER_ADDRESS_DETAIL}
                </p>
              </div>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`${CENTER_ADDRESS} (${CENTER_ADDRESS_DETAIL})`);
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
