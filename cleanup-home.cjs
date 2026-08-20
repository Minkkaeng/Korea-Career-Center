const fs = require('fs');

let f = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const oldBlockEnd = f.indexOf('            {/* Buttons */}');
const searchStr = '<motion.div \n              initial="hidden" animate="visible" variants={fadeInUp}\n              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/50';
// Actually, it's easier to just use regex
f = f.replace(/            <motion\.div [\s\S]*?가장 혁신적인 성장의 길을 안내합니다\.\n            <\/motion\.p>\n\n/g, '');

fs.writeFileSync('src/pages/Home.tsx', f, 'utf8');
