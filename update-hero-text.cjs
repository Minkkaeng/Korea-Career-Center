const fs = require('fs');

let f = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const oldText1 = `미래를 설계하는<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-100">맞춤형 커리어 솔루션</span>`;
const newText1 = `미래를 설계하는<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-100">AI 기반 맞춤형 커리어 솔루션</span>`;

const oldText2 = `최신 AI 데이터 분석을 기반으로 당신의 커리어 패스를 예측하고,<br className="hidden md:block" />
              가장 혁신적인 성장의 길을 안내합니다.`;
const newText2 = `정교한 AI 진단부터 맞춤형 진학·취업·창업.<br className="hidden md:block" />
              당신만을 위한 성공적인 커리어 로드맵을 제시합니다.`;

f = f.replace(oldText1, newText1);
f = f.replace(oldText2, newText2);

// Handle CRLF if needed
if (!f.includes(newText1)) {
  const oldText1CR = oldText1.replace(/\\n/g, '\\r\\n');
  f = f.replace(oldText1CR, newText1);
  const oldText2CR = oldText2.replace(/\\n/g, '\\r\\n');
  f = f.replace(oldText2CR, newText2);
}

fs.writeFileSync('src/pages/Home.tsx', f, 'utf8');
