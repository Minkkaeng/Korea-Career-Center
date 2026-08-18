import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Organization from './pages/Organization';
import Programs from './pages/Programs';
import Partners from './pages/Partners';
import Apply from './pages/Apply';
import Notices from './pages/Notices';
import Contact from './pages/Contact';
import JobInfo from './pages/JobInfo';
import ConsultationWidget from './components/ConsultationWidget';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/programs/*" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-info" element={<JobInfo />} />
        </Route>
      </Routes>
      <ConsultationWidget />
    </>
  );
}

export default App;
