const fs = require('fs');
let f = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
const start = f.indexOf('<div className="absolute inset-2 rounded bg-slate-100 overflow-hidden border border-slate-200">');
const end = f.indexOf('</div>\n              </div>\n              \n              <div className="bg-white rounded-lg p-8');
if (start !== -1 && end !== -1) {
  const newContent = `<div className="absolute inset-2 rounded bg-slate-100 overflow-hidden border border-slate-200">
                  {/* 카카오맵/네이버지도 API 적용 위치 (현재는 구글맵 임베드로 시각화) */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7753174246884!2d126.97321481531145!3d37.56030997979927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2eb421c44ad%3A0xe955a50c118085f8!2sSeoul%20Station!5e0!3m2!1sen!2skr!4v1650000000000!5m2!1sen!2skr"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="한국진로커리어센터 위치 지도"
                  ></iframe>
                `;
  f = f.substring(0, start) + newContent + f.substring(end);
  fs.writeFileSync('src/pages/Contact.tsx', f);
}
