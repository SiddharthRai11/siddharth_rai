import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SpotlightCard from './Spotlightcard';

const projects = [
  {
    title: 'Quick-Chat',
    description:
      'A real-time chat application built using Socket.IO and React, enabling users to send and receive messages instantly. Features include live messaging, user presence status, and a responsive UI for seamless communication across devices',
    image: '/Screenshot 2025-06-20 122334.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/SiddharthRai11/chat_app',
    live: 'https://chat-app-tau-blush.vercel.app/login',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team features, and progress tracking. Built with React and Firebase.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://chat-app-tau-blush.vercel.app/login',
  },
  {
    title: 'AI Chat Application',
    description:
      'An AI-powered chat application that uses natural language processing to provide intelligent responses. Built with Python and React.',
    image: '/projects/aichat.jpg',
    technologies: ['Python', 'React', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com/yourusername/aichat',
    live: 'https://aichat-demo.com',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-[#0d1117] text-gray-200 relative overflow-hidden"
      style={{
        filter: 'grayscale(10%) brightness(0.98)',
        transition: 'filter 0.5s ease',
      }}
    >
      {/* Blue glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-600 
                     blur-[100px] mix-blend-screen"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cyan-500 
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
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                  <SpotlightCard className="bg-[#161B22] p-0 border border-blue-900/30">
    <div className="rounded-xl overflow-hidden">
      <div className="relative h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub className="w-7 h-7" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-500 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-900/20 text-blue-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
