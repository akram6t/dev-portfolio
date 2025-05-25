
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import TerminalCard from './TerminalCard';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <SectionWrapper 
      id="projects" 
      title="My Creations"
      subtitle="A selection of projects that showcase my skills and passion for development. Click on any card to explore more."
    >
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
      >
        {PROJECTS_DATA.map((project: Project) => (
          <TerminalCard key={project.id} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
