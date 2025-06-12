import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#0d1117]  shadow-md z-50">
      <div className="container-padding mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link
            to="home"
            className="text-2xl font-bold text-accent cursor-pointer"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-text hover:text-accent cursor-pointer transition-colors"
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-text transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-full h-0.5 bg-text transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-text transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-dark2 rounded-b-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block px-3 py-2 text-text hover:text-accent cursor-pointer"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 