import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Experience />
      <Certifications />
      <Skills />
      <About />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;
