import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import CertificatesGallery from './pages/CertificatesGallery';
import Contact from './pages/Contact';
import { Box } from '@mui/material';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Box sx={{ m: 0, p: 0, width: '100%' }}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/certificates" element={<CertificatesGallery />} /> */}
        <Route path="/get-in-touch" element={<Contact />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
