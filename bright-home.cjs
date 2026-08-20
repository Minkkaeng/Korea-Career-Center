const fs = require('fs');

let f = fs.readFileSync('src/pages/Home.tsx', 'utf8');

f = f.replace(/<section className="sticky top-0 w-full h-screen bg-slate-900[\s\S]*?<div className="absolute inset-0 bg-slate-900\/40" \/>\r?\n        <\/div>/, `<section className="sticky top-0 w-full h-screen bg-white flex items-center justify-center overflow-hidden z-0">
        
        {/* 동적 배경 */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={\`\${import.meta.env.BASE_URL}images/hero.jpg\`}
            alt="배경 이미지" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>`);

fs.writeFileSync('src/pages/Home.tsx', f, 'utf8');
