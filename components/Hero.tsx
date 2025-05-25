
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '../constants';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-extrabold tracking-tight"
        >
          <span className="block text-[#C9D1D9]">Hey, I'm </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#30A3F0] via-[#39FF14] to-[#FF4500]">
            [Your Name Here]
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl mx-auto text-lg sm:text-xl md:text-2xl text-[#8B949E] font-fira-code"
        >
          <span className="text-[#39FF14]">&gt;</span> A Creative Developer specializing in crafting
          <br className="hidden sm:block" />
          <span className="text-[#30A3F0] font-semibold">unique</span> & <span className="text-[#FF4500] font-semibold">performant</span> digital experiences.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 border-2 border-[#30A3F0] text-[#30A3F0] font-semibold rounded-lg text-lg hover:bg-[#30A3F0] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(48,163,240,0.5)] hover:shadow-[0_0_25px_rgba(48,163,240,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3 border-2 border-[#39FF14] text-[#39FF14] font-semibold rounded-lg text-lg hover:bg-[#39FF14] hover:text-[#0D1117] transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8B949E] hover:text-[#30A3F0] transition-colors z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <ChevronDownIcon className="w-10 h-10" />
      </motion.button>
    </section>
  );
};

export default Hero;
