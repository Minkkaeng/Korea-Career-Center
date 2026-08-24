const fs = require('fs');

let f = fs.readFileSync('src/pages/About.tsx', 'utf8');

const historySection = `
      {/* History (연혁) Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest text-sm mb-4 block uppercase">History</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">센터 연혁</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto break-keep">
              기술과 사람을 잇는 곳, 한국진로커리어센터의 발자취입니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-blue-600 ml-6 md:ml-0 md:pl-0">
              
              <div className="mb-12 relative flex items-center md:justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-[10px] md:left-1/2 md:-ml-2 ring-4 ring-blue-100"></div>
                <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">2026. 01. 23</h3>
                  <p className="text-lg font-bold text-slate-900">한국진로커리어센터 설립</p>
                  <p className="text-slate-600 mt-2">대표이사 겸 센터장 체제 출범</p>
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              </div>

              <div className="mb-12 relative flex items-center md:justify-center">
                <div className="absolute w-4 h-4 rounded-full bg-blue-600 -left-[10px] md:left-1/2 md:-ml-2 ring-4 ring-blue-100"></div>
                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div className="pl-8 md:pl-0 md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">2026. 05 ~</h3>
                  <p className="text-lg font-bold text-slate-900">교육 및 공공기관 협력 확대</p>
                  <p className="text-slate-600 mt-2 break-keep">
                    · 중랑여성인력개발센터 AI·디지털 위원회 위촉<br/>
                    · 성남시일자리센터 및 한국폴리텍대학 등 주요 기관 업무협약 체결
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
`;

// Insert before {/* Vision Statement Section */}
f = f.replace('{/* Vision Statement Section */}', historySection + '\n      {/* Vision Statement Section */}');

fs.writeFileSync('src/pages/About.tsx', f, 'utf8');
console.log('History added to About.tsx');
