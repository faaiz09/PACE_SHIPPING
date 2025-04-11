import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Associates from './pages/Associates';
import Network from './pages/Network';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import ShareFile from './pages/ShareFile';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-primary-light to-primary-dark">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/associates" element={<Associates />} />
              <Route path="/network" element={<Network />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/share-file" element={<ShareFile />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 