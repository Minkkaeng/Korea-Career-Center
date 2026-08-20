const fs = require('fs');

const files = [
  'src/pages/Organization.tsx',
  'src/pages/Notices.tsx',
  'src/pages/Programs.tsx',
  'src/pages/Contact.tsx'
];

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf8');
  // Match the exact div starting tag and replace its classes with hidden
  f = f.replace(/<div className="bg-white pt-24 pb-16 border-b border-slate-200">/g, '<div className="hidden">');
  
  // Also remove the mt-16 from the next container so it doesn't leave an awkward gap
  // e.g. <div className="max-w-[1240px] mx-auto px-6 mt-16 relative">
  f = f.replace(/className="max-w-\[1240px\] mx-auto px-6 mt-16/g, 'className="max-w-[1240px] mx-auto px-6 mt-8');
  
  fs.writeFileSync(file, f, 'utf8');
});

console.log('Hidden heroes in 4 pages');
