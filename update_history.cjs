const fs = require('fs');

const historyItems = [
  {
    date: '2026. 01. 23',
    title: '한국진로커리어센터 설립',
    desc: '대표이사 겸 센터장 체제 출범'
  },
  {
    date: '2026. 05. 28',
    title: '한국폴리텍대학 로봇캠퍼스 산학협력 MOU 체결',
    desc: ''
  },
  {
    date: '2026. 06. 12',
    title: '성남시일자리센터 업무협약 체결',
    desc: '협약 기간: 3년'
  },
  {
    date: '2026. 06. 26',
    title: "중랑여성인력개발센터 'AI·디지털 일자리위원회' 발족",
    desc: ''
  },
  {
    date: '2026. 08. 18',
    title: '대표이사, 한국폴리텍 로봇캠퍼스 로봇IT과 시간강사 위촉',
    desc: "교과목: '생성형AI기반 업무자동화 직업진로' (~2026.12.31)",
    isNew: true
  }
];

const generateHtml = () => {
  let html = \`          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-4 border-blue-600 ml-6 md:ml-0 md:pl-0">\n\`;

  historyItems.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    
    html += \`              <div className="mb-12 relative flex items-center md:justify-center group">
                <div className="absolute w-5 h-5 rounded-full bg-blue-600 -left-[10.5px] md:left-1/2 md:-ml-2.5 ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all duration-300"></div>\n\`;
                
    if (isLeft) {
      // Content on left (md:text-right)
      html += \`                <div className="pl-8 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2 flex items-center md:justify-end gap-2">
                    \${item.date}
                    \${item.isNew ? '<span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full ml-2">NEW</span>' : ''}
                  </h3>
                  <p className="text-lg font-bold text-slate-900 leading-snug break-keep">\${item.title}</p>
                  \${item.desc ? \`<p className="text-slate-600 mt-2 text-[15px]">\${item.desc}</p>\` : ''}
                </div>
                <div className="hidden md:block md:w-1/2 md:pl-12"></div>\n\`;
    } else {
      // Content on right (md:text-left)
      html += \`                <div className="hidden md:block md:w-1/2 md:pr-12"></div>
                <div className="pl-8 md:pl-0 md:w-1/2 md:pl-12 text-left">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2 flex items-center gap-2">
                    \${item.date}
                    \${item.isNew ? '<span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded-full ml-2">NEW</span>' : ''}
                  </h3>
                  <p className="text-lg font-bold text-slate-900 leading-snug break-keep">\${item.title}</p>
                  \${item.desc ? \`<p className="text-slate-600 mt-2 text-[15px]">\${item.desc}</p>\` : ''}
                </div>\n\`;
    }
    
    html += \`              </div>\n\`;
  });

  html += \`            </div>
          </div>\`;
  return html;
};

let file = fs.readFileSync('src/pages/About.tsx', 'utf8');

const regex = /<div className="max-w-3xl mx-auto">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*{\/\* Vision Statement Section \*\/}/;
file = file.replace(regex, generateHtml() + '\\n        </div>\\n      </section>\\n\\n      {/* Vision Statement Section */}');

fs.writeFileSync('src/pages/About.tsx', file, 'utf8');
console.log('History updated.');
