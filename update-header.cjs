const fs = require('fs');

let headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Remove { path: '/', label: 'HOME' },
headerCode = headerCode.replace(/\{\s*path:\s*'\/'\s*,\s*label:\s*'HOME'\s*\},?\s*/, '');

// Replace programs children
const oldProgramsChildren = /children:\s*\[\s*\{\s*path:\s*'\/job-info'[\s\S]*?\}\s*\]/;
const newProgramsChildren = `children: [
        { path: '/programs/youth', label: '청년 취업역량강화' },
        { path: '/programs/ai', label: 'AI 활용 진로상담' },
        { path: '/programs/corporate', label: '기업 채용 컨설팅' },
        { path: '/programs/special', label: '특강·위탁교육' }
      ]`;
headerCode = headerCode.replace(oldProgramsChildren, newProgramsChildren);

fs.writeFileSync('src/components/Header.tsx', headerCode, 'utf8');
console.log('Header updated successfully');
