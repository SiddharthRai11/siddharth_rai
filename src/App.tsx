import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Parallax Divider Component
const ParallaxDivider = ({ image, height = "250px" }: { image: string, height?: string }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(11,14,19,0.85), rgba(11,14,19,0.85)), url(${image})`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height,
      width: '100%',
      zIndex: 0,
    }}
    aria-hidden="true"
  />
);

// Sample images (replace with your own if preferred)
const parallaxImages = [
 "./skills.jpg",
 "./contactme.jpg"
];

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
       

        <About />
        <ParallaxDivider image={parallaxImages[0]} />

        <Skills />

        <Projects />
        <ParallaxDivider image={parallaxImages[1]} />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
