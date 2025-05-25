
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import { ExternalLinkIcon, GitHubIcon } from '../constants';

interface TerminalCardProps {
  project: Project;
}

const TerminalCard: React.FC<TerminalCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 10px 30px -5px rgba(48, 163, 240, 0.4)",
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' } }
  };


  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onClick={() => setIsExpanded(true)}
        className="bg-[#161B22] border-2 border-[#30A3F0]/50 rounded-lg shadow-xl overflow-hidden cursor-pointer group transform transition-all duration-300 ease-in-out h-full flex flex-col"
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#0D1117] px-4 py-2 flex items-center space-x-2 border-b border-[#30A3F0]/50">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <p className="text-xs text-[#8B949E] ml-auto font-fira-code">user@portfolio:~/projects/{project.id}</p>
        </div>

        {project.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        )}
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-orbitron font-bold text-[#30A3F0] mb-2 group-hover:text-[#60C3F0] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#8B949E] text-sm mb-4 flex-grow line-clamp-3 group-hover:line-clamp-none">
            <span className="text-[#39FF14]">$</span> {project.description}
          </p>
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-[#30A3F0]/10 text-[#30A3F0] text-xs rounded font-fira-code">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#39FF14] hover:text-green-300 transition-colors text-sm font-semibold flex items-center"
                >
                  Live Demo <ExternalLinkIcon className="ml-1 w-4 h-4" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[#C9D1D9] hover:text-white transition-colors text-sm font-semibold flex items-center"
                >
                  <GitHubIcon className="mr-1 w-4 h-4" /> View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#161B22] border-2 border-[#30A3F0] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsExpanded(false)} 
                className="absolute top-4 right-4 text-[#8B949E] hover:text-white text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className="text-3xl font-orbitron font-bold text-[#30A3F0] mb-4">{project.title}</h2>
              {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full rounded-md mb-4 aspect-video object-cover"/>}
              <p className="text-[#C9D1D9] mb-2 font-fira-code"><span className="text-[#39FF14]">$</span> {project.description}</p>
              {project.longDescription && <p className="text-[#8B949E] mb-4 leading-relaxed font-fira-code">{project.longDescription}</p>}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#30A3F0]/20 text-[#30A3F0] text-sm rounded-full font-fira-code">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#39FF14] text-[#0D1117] font-semibold rounded-lg hover:bg-green-300 transition-colors flex items-center justify-center text-sm"
                  >
                    Live Demo <ExternalLinkIcon className="ml-2 w-4 h-4" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border-2 border-[#C9D1D9] text-[#C9D1D9] font-semibold rounded-lg hover:bg-[#C9D1D9] hover:text-[#0D1117] transition-colors flex items-center justify-center text-sm"
                  >
                    <GitHubIcon className="mr-2 w-5 h-5" /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalCard;
