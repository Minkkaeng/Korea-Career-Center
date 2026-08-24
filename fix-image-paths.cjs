const fs = require('fs');

const files = ['src/pages/Organization.tsx', 'src/pages/Notices.tsx'];

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf8');
  
  // Replace string literals like '/images/...' with \`\${import.meta.env.BASE_URL}images/...\`
  f = f.replace(/'\/images\/(.*?)'/g, "`\\${import.meta.env.BASE_URL}images/$1`");
  
  fs.writeFileSync(file, f, 'utf8');
});

console.log('Fixed image paths');
