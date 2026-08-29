export default function Special() {
  return (
    <div className="w-full bg-slate-50/50 font-sans min-h-screen pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 relative">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">특강·위탁교육</h2>
          
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


