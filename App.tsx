
import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] font-fira-code relative overflow-x-hidden">
      {/* Glowing Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[#30A3F0]/30 via-transparent to-transparent rounded-full"
          animate={{
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0],
            scale: [1, 1.1, 1, 0.9, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[15%] w-[300px] h-[300px] bg-gradient-to-tl from-[#FF4500]/20 via-transparent to-transparent rounded-full"
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, 20, 0, -20, 0],
            scale: [1, 0.9, 1, 1.1, 1],
            rotate: [0, -15, 0, 15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
         <motion.div
          className="absolute top-[30%] right-[5%] w-[250px] h-[250px] bg-gradient-to-bl from-[#39FF14]/20 via-transparent to-transparent rounded-full"
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -15, 0, 15, 0],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
