import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function AiConsulting() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-32">
      {/* 텍스트 헤더 숨김 처리됨 (hide-heroes와 동일 구조) */}
      <div className="hidden">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[#1e3a8a] font-bold tracking-widest text-sm mb-4 block uppercase">AI Career Counseling</span>
          <h1 className="text-4xl md:text-[42px] font-black text-slate-900 mb-6 tracking-tight">AI 활용 진로상담</h1>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-8 relative">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">AI 활용 진로상담</h2>
          
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

            
            {/* AI 진로상담 신청서 다운로드 영역 */}
            <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">상담 신청하기</h3>
              <p className="text-blue-800/70 mb-8 max-w-xl mx-auto break-keep">
                아래 버튼을 눌러 신청서 양식을 다운로드한 후, 작성하여 이메일로 접수해 주시기 바랍니다. (추후 온라인 접수 폼 기능 도입 검토 중)
              </p>
              <a 
                href={`${import.meta.env.BASE_URL}진로상담_접수원서.docx`} 
                download
                className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
              >
                <Download className="w-5 h-5" />
                상담 접수원서 다운로드
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
