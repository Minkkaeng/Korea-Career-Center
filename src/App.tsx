import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Organization from './pages/Organization';
import Youth from './pages/programs/Youth';
import AiConsulting from './pages/programs/AiConsulting';
import Corporate from './pages/programs/Corporate';
import Special from './pages/programs/Special';

import Partners from './pages/Partners';
import Apply from './pages/Apply';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import JobInfo from './pages/JobInfo';
import ConsultationWidget from './components/ConsultationWidget';

function App() {
  return (
    <ReactLenis root>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/programs/youth" element={<Youth />} />
          <Route path="/programs/ai" element={<AiConsulting />} />
          <Route path="/programs/corporate" element={<Corporate />} />
          <Route path="/programs/special" element={<Special />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-info" element={<JobInfo />} />
        </Route>
      </Routes>
      <ConsultationWidget />
    </ReactLenis>
  );
}

export default App;
