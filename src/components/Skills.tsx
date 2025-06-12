//import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'TypeScript', icon: SiTypescript, level: 85 },
  { name: 'Node.js', icon: FaNodeJs, level: 80 },
  { name: 'Python', icon: FaPython, level: 75 },
  { name: 'MongoDB', icon: SiMongodb, level: 85 },
  { name: 'SQL', icon: FaDatabase, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 90 },
  { name: 'Docker', icon: FaDocker, level: 70 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="section-padding bg-[#0d1117] relative overflow-hidden"
      style={{
        filter: 'grayscale(10%) brightness(0.98)',
        transition: 'filter 0.5s ease'
      }}
    >
      {/* Blue glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 
                    blur-[100px] mix-blend-screen"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 
                    blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="container-padding mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#161B22] p-6 rounded-xl shadow-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full"
                  />
                </div>
                <p className="text-right mt-2 text-sm text-blue-300">
                  {skill.level}%
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;