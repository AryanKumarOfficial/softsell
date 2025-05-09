'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeProvider';
import { FiMoon, FiSun, FiX, FiMenu } from 'react-icons/fi';
import { BsLaptop } from 'react-icons/bs';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, setTheme } = useTheme();

  // Handle scroll event to change header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for nav highlighting
      const sections = ['hero', 'how-it-works', 'why-choose-us', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Scroll to section when nav link is clicked
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-secondary-900/5 py-2 dark:bg-secondary-950/95 dark:shadow-secondary-900/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span className="h-10 w-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30 mr-3 group-hover:scale-105 transition-transform duration-200">
                <BsLaptop className="w-5 h-5 text-white" />
              </span>
              <span className={`text-xl font-bold tracking-tight ${
                isScrolled 
                  ? 'text-secondary-900 dark:text-white' 
                  : theme === 'dark' ? 'text-white' : 'text-secondary-900'
              }`}>
                Soft<span className="text-primary-600 dark:text-primary-400">Sell</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { name: 'Home', section: 'hero' },
              { name: 'How It Works', section: 'how-it-works' },
              { name: 'Why Choose Us', section: 'why-choose-us' },
              { name: 'Testimonials', section: 'testimonials' },
              { name: 'Contact', section: 'contact' },
            ].map((item) => {
              const isActive = activeSection === item.section;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : isScrolled 
                        ? 'text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400' 
                        : theme === 'dark'
                          ? 'text-white/90 hover:text-white'
                          : 'text-secondary-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 dark:bg-primary-400 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                isScrolled 
                  ? 'text-secondary-700 hover:bg-secondary-100 dark:text-white dark:hover:bg-secondary-800' 
                  : theme === 'dark'
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-secondary-700 hover:bg-secondary-100'
              }`}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </button>
            
            <button
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/30' 
                  : theme === 'dark'
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-primary-600 hover:text-primary-700 hover:bg-primary-50'
              }`}
            >
              Log in
            </button>
            <button className="btn-primary text-sm px-5 py-2.5">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'text-secondary-700 hover:bg-gray-100 dark:text-white dark:hover:bg-secondary-800' 
                  : theme === 'dark'
                    ? 'text-white hover:bg-white/10'
                    : 'text-secondary-700 hover:bg-gray-100'
              }`}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-secondary-700 dark:text-white' 
                  : theme === 'dark' ? 'text-white' : 'text-secondary-700'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 glass rounded-xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-3 px-4 space-y-1">
                {[
                  { name: 'Home', section: 'hero' },
                  { name: 'How It Works', section: 'how-it-works' },
                  { name: 'Why Choose Us', section: 'why-choose-us' },
                  { name: 'Testimonials', section: 'testimonials' },
                  { name: 'Contact', section: 'contact' },
                ].map((item) => {
                  const isActive = activeSection === item.section;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.section)}
                      className={`flex items-center w-full px-4 py-2.5 rounded-lg ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                          : 'text-secondary-700 dark:text-secondary-300 hover:bg-gray-100 dark:hover:bg-secondary-800/80'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="mobileActiveIndicator"
                          className="w-1 h-5 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <span className={!isActive ? 'ml-4' : ''}>{item.name}</span>
                    </button>
                  );
                })}
                <div className="grid grid-cols-2 gap-3 pt-4 mt-3 border-t border-gray-200 dark:border-secondary-700/50">
                  <button className="px-3 py-2.5 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg">
                    Log in
                  </button>
                  <button className="btn-primary py-2.5">
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}