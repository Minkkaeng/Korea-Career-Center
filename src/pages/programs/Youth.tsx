import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Youth() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* 텍스트 헤더 숨김 처리됨 (hide-heroes와 동일 구조) */}
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">Youth Capacity Building</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">청년 취업역량강화</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-8 relative">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">청년 취업역량강화</h2>
          
          <div className="prose prose-lg max-w-none text-slate-600">
            <p className="text-xl font-medium text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">
              센터에서 전달해주실 상세 내용(대상, 일정, 장소, 커리큘럼 등)이 업데이트될 예정입니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  교육/상담 대상
                </h3>
                <p className="text-slate-500">업데이트 예정</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  진행 일정 및 장소
                </h3>
                <p className="text-slate-500">업데이트 예정</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
