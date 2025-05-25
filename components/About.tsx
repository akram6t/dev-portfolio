
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { UserCircleIcon, CodeBracketIcon } from '../constants';

const About: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <SectionWrapper id="about" title="About Me" subtitle="A little bit about my journey and passion for code.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={imageVariants}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#30A3F0] to-[#39FF14] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src="https://picsum.photos/seed/profile/500/500"
            alt="[Your Name]"
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto relative z-10 aspect-square object-cover"
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <h3 className="text-2xl font-semibold text-[#C9D1D9] mb-4 font-orbitron">
            <UserCircleIcon className="inline-block w-7 h-7 mr-2 text-[#30A3F0]" />
            Who I Am
          </h3>
          <p className="text-[#8B949E] mb-4 leading-relaxed">
            Hello! I'm [Your Name], a passionate and results-driven software developer with a knack for creating elegant solutions to complex problems. My journey into the world of code began with a fascination for how technology shapes our world, and it has since evolved into a full-blown passion for building innovative and impactful digital experiences.
          </p>
          <p className="text-[#8B949E] mb-6 leading-relaxed">
            I thrive in collaborative environments and enjoy tackling challenges head-on. Whether it's crafting pixel-perfect UIs, architecting scalable backend systems, or diving into new technologies, I'm always eager to learn and grow.
          </p>
          <h3 className="text-2xl font-semibold text-[#C9D1D9] mb-4 font-orbitron">
             <CodeBracketIcon className="inline-block w-7 h-7 mr-2 text-[#39FF14]" />
            My Philosophy
          </h3>
          <p className="text-[#8B949E] leading-relaxed">
            I believe that great software is not just about functional code, but also about thoughtful design, user empathy, and a commitment to quality. I strive to write clean, maintainable, and efficient code that stands the test of time. Let's build something amazing together!
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
