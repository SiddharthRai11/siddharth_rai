import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, team features, and progress tracking. Built with React and Firebase.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com',
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
    
   //<section id="projects" className="section-padding bg-sky-50 text-gray-800">
   //<section id="projects" className="section-padding bg-blue-100 text-gray-800">
   //<section id="projects" className="section-padding bg-[#e6f0ff] text-gray-800">
   // <section id="projects" className="section-padding bg-[#c7ddff] text-gray-800">
   <section id="projects" className="section-padding bg-blue-50 text-gray-800">


      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
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
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
              >
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
                      className="text-blue-700 hover:text-blue-500 transition-colors duration-300"
                    >
                      <FaGithub className="w-7 h-7" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-cyan-500 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-7 h-7" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
