
import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-24 min-h-screen/2 flex flex-col justify-center ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity:0, y:20}}
            whileInView={{ opacity:1, y:0}}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-[#30A3F0] uppercase tracking-wider">
              <span className="text-[#C9D1D9]">//</span> {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-[#8B949E] max-w-2xl mx-auto font-fira-code">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
