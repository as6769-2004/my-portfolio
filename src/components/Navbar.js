import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-dark-700 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto mobile-optimized">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">{personalInfo.avatar.charAt(0)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold gradient-text leading-tight">{personalInfo.name}</span>
              <span className="text-xs sm:text-sm text-secondary hidden sm:block">{personalInfo.title}</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-secondary hover:text-primary font-medium text-sm lg:text-base"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Tech Stack Icons */}
            <div className="hidden lg:flex items-center space-x-3 px-4 py-2 bg-gray-100 dark:bg-dark-700 rounded-lg">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-6 h-6 bg-black rounded flex items-center justify-center cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center cursor-pointer"
                title="Portfolio"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center"
                title="MySQL"
              >
                <span className="text-white text-xs font-bold">SQL</span>
              </motion.div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 lg:px-6 py-2 rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
            >
              <Download size={14} className="lg:w-4 lg:h-4" />
              <span>Resume</span>
            </motion.button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Tech Stack Icons */}
            <div className="flex items-center space-x-2 mr-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-5 h-5 bg-black rounded flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-3 h-3 text-white" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="w-3 h-3 text-white" />
              </motion.div>
            </div>
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4 bg-card border border-card rounded-lg p-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-secondary hover:text-primary font-medium text-left py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 w-full justify-center mt-4"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.button>
                
                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 