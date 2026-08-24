const fs = require('fs');
let file = fs.readFileSync('src/pages/Organization.tsx', 'utf8');

file = file.split('\`\\\\${').join('\`${');

fs.writeFileSync('src/pages/Organization.tsx', file, 'utf8');
console.log('Fixed syntax errors');
