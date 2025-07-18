import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import AllCertificates from './components/AllCertificates';
import AllExperience from './components/AllExperience';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-dark-900 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold gradient-text">Loading Portfolio<span className="loading-dots"></span></h2>
          </motion.div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certificates />
                <Education />
                <Contact />
              </main>
            } />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/all-certificates" element={<AllCertificates />} />
            <Route path="/all-experience" element={<AllExperience />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 