
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA, CodeBracketIcon } from '../constants';
import type { SkillCategory, Skill } from '../types';

const SkillItem: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: index * 0.05, type: 'spring', stiffness: 100 } 
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#161B22] p-3 rounded-md border border-[#30A3F0]/30 hover:border-[#30A3F0] transition-all duration-200 shadow-md hover:shadow-[#30A3F0]/20 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#C9D1D9]">{skill.name}</span>
        {skill.icon && <span className="text-[#30A3F0]">{skill.icon}</span>}
      </div>
      {skill.level && (
        <div className="mt-2 h-2 w-full bg-[#0D1117] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#30A3F0] to-[#39FF14]"
            style={{ width: `${skill.level}%` }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.05, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      )}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper 
      id="skills" 
      title="Tech Arsenal"
      subtitle="The tools and technologies I wield to build innovative solutions and bring ideas to life."
    >
      <div className="space-y-12">
        {SKILLS_DATA.map((category: SkillCategory, catIndex: number) => (
          <motion.div 
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-semibold text-[#39FF14] mb-6 flex items-center">
              <CodeBracketIcon className="w-6 h-6 mr-3 text-[#39FF14]" />
              {category.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.skills.map((skill: Skill, skillIndex: number) => (
                <SkillItem key={skill.id} skill={skill} index={skillIndex} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
