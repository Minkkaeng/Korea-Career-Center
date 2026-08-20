const fs = require('fs');

let f = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newHero = `      {/* Hero Section (Sticky Overlay) */}
      <section className="sticky top-0 w-full h-screen bg-slate-900 flex items-center justify-center overflow-hidden z-0">
        
        {/* 동적 배경 */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            src={\`\${import.meta.env.BASE_URL}images/hero.jpg\`}
            alt="배경 이미지" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/30" />
        </div>

        {/* 통합된 원본 텍스트 레이어 */}
        <motion.div 
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center text-white mt-16 flex flex-col items-center"
        >
            <motion.div 
              initial="hidden" animate="visible" variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              차세대 AI 커리어 솔루션
            </motion.div>

            <motion.h1 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[1.1] tracking-tight break-keep mb-8 drop-shadow-2xl text-white"
            >
              미래를 설계하는<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-100">맞춤형 커리어 솔루션</span>
            </motion.h1>

            <motion.p 
              initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-100 max-w-2xl font-medium break-keep mb-12 drop-shadow-lg leading-relaxed"
            >
              최신 AI 데이터 분석을 기반으로 당신의 커리어 패스를 예측하고,<br className="hidden md:block" />
              가장 혁신적인 성장의 길을 안내합니다.
            </motion.p>`;

const startIdx = f.indexOf('      {/* Hero Section (Sticky Overlay) */}');
const endIdx = f.indexOf('            <motion.div');
const endIdxReal = f.indexOf('            <motion.div', startIdx + 500);

if (startIdx !== -1 && endIdxReal !== -1) {
  f = f.substring(0, startIdx) + newHero + '\n\n' + f.substring(endIdxReal);
  fs.writeFileSync('src/pages/Home.tsx', f, 'utf8');
} else {
  console.log("Could not find replacement indices");
}
