import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Archives from './pages/Archives';
import Contact from './pages/Contact';

// Scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppContent() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorGlow = document.getElementById('cursor-glow');
      if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-background text-on-surface">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Pages */}
      <div className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Atmospheric Cursor Glow overlay */}
      <div 
        id="cursor-glow" 
        className="fixed pointer-events-none w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-[100px] z-0 hidden sm:block"
        style={{ left: '-500px', top: '-500px', transition: 'left 0.1s ease-out, top 0.1s ease-out' }}
      ></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
