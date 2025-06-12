import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-[#0d1117] 
                relative overflow-hidden group"
      style={{
        filter: 'grayscale(10%) brightness(0.98)',
        transition: 'filter 0.5s ease'
      }}
    >
      {/* Blue glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 
                    blur-[100px] mix-blend-screen"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-500 
                    blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="container-padding mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-200">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SIDDHARTH RAI</span>
          </h1>
          <motion.h2 
            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.4 }}
          >
            I build exceptional digital experiences that make an impact.
            Specializing in beautiful, functional, and user-centered solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg 
                        text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 
                        transition-all duration-300 border border-blue-400/20"
            >
              Contact Me
            </Link>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-400/40 text-blue-300 rounded-lg 
                        hover:bg-blue-900/30 hover:text-white transition-all duration-300
                        hover:shadow-lg hover:shadow-blue-500/20"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.div 
              className="absolute inset-0 bg-blue-600 rounded-full opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src="src\profile.jpeg"
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-[#0d1117]
                        shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            />
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-400/30 pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .group:hover {
          filter: grayscale(0%) brightness(1);
        }
      `}</style>
    </section>
  );
};

export default Hero;