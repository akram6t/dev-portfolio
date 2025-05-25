
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, Bars3Icon, XMarkIcon } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 120,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: '0%' },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isOpen ? 'bg-[#161B22]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-orbitron font-bold tracking-wider text-[#30A3F0] hover:text-[#60C3F0] transition-colors">
              DEV_X
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {NAV_LINKS.map((link: NavLink, index: number) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#C9D1D9] hover:bg-[#30A3F0]/20 hover:text-[#30A3F0] transition-all duration-200 ease-in-out relative group"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div 
                  className="absolute inset-0 bg-[#30A3F0]/10 rounded-md opacity-0 group-hover:opacity-100"
                  layoutId={`underline-${link.id}`}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C9D1D9] hover:text-[#30A3F0] focus:outline-none p-2 rounded-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-20 bg-[#161B22]/95 backdrop-blur-lg shadow-xl pb-6"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <nav className="flex flex-col items-center space-y-3 pt-4">
              {NAV_LINKS.map((link: NavLink, index: number) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="block px-4 py-3 text-base font-medium text-[#C9D1D9] hover:bg-[#30A3F0]/20 hover:text-[#30A3F0] rounded-md transition-colors w-4/5 text-center"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
