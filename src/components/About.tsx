//import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
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
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-600 
                    blur-[100px] mix-blend-screen"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cyan-500 
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
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-400 opacity-90">
                I'm a passionate Frontend Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions to complex problems. With several
                years of experience in the industry, I've developed a deep understanding of
                both front-end and back-end development.
              </p>
              <p className="text-gray-400 opacity-90">
                My journey in software development began with a curiosity about how things work
                on the web. This curiosity has evolved into a professional career where I
                specialize in building responsive, user-friendly applications using modern
                technologies.
              </p>
              <p className="text-gray-400 opacity-90">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through technical writing
                and mentoring.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 font-medium transition"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 font-medium transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 font-medium transition"
                >
                  Twitter
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-90 h-80 aspect-square rounded-2xl overflow-hidden border-4 border-blue-600 shadow-lg mx-auto">
                <img
                  src="assets_task_01jxj3d89aeh28fgwhcm3bh4k4_1749733034_img_0.webp"
                  alt="About Me"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-2xl -z-10 opacity-30" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

