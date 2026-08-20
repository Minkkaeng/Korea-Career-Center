const fs = require('fs');

const files = [
  'src/pages/JobInfo.tsx',
  'src/pages/Apply.tsx',
  'src/pages/Partners.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let f = fs.readFileSync(file, 'utf8');
    
    // Replace the common Hero div
    f = f.replace(/<div className="bg-white pt-24 pb-16 border-b border-slate-200">/g, '<div className="hidden">');
    // For Partners.tsx if it has one
    
    // Adjust mt-16 to mt-8 just like the other files if it exists
    f = f.replace(/className="max-w-\[1240px\] mx-auto px-6 mt-16/g, 'className="max-w-[1240px] mx-auto px-6 mt-8');
    
    fs.writeFileSync(file, f, 'utf8');
  }
});
console.log('Done hiding in subpages');
