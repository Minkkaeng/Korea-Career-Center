const fs = require('fs');

let f = fs.readFileSync('src/App.tsx', 'utf8');

// Add imports for the new programs
const imports = `import Youth from './pages/programs/Youth';
import AiConsulting from './pages/programs/AiConsulting';
import Corporate from './pages/programs/Corporate';
import Special from './pages/programs/Special';
`;

// Replace the old Programs import and route
f = f.replace("import Programs from './pages/Programs';", imports);

const oldRoute = '<Route path="/programs/*" element={<Programs />} />';
const newRoutes = `<Route path="/programs/youth" element={<Youth />} />
          <Route path="/programs/ai" element={<AiConsulting />} />
          <Route path="/programs/corporate" element={<Corporate />} />
          <Route path="/programs/special" element={<Special />} />`;

f = f.replace(oldRoute, newRoutes);
fs.writeFileSync('src/App.tsx', f, 'utf8');
console.log('App.tsx routing updated');
