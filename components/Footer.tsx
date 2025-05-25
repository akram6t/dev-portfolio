
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-[#0D1117] border-t border-[#373E47]/50 py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-6">
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B949E] hover:text-[#30A3F0] transition-colors duration-200"
              whileHover={{ scale: 1.2, y: -2 }}
              title={link.name}
            >
              {React.cloneElement(link.icon, { className: "w-7 h-7" })}
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-[#8B949E]">
          <span className="text-[#39FF14]">&gt;</span> Built with <span className="text-[#FF4500]">passion</span> & <span className="text-[#30A3F0]">code</span>.
        </p>
        <p className="text-sm text-[#8B949E] mt-1">
          &copy; {currentYear} [Your Name Here]. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
