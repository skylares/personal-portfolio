import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  const [yPosition, setYPosition] = useState(0);

  const trackYPos = () => {
    if (typeof window !== 'undefined') {
      setYPosition(window.scrollY);
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', trackYPos);

      return () => window.removeEventListener('scroll', trackYPos);
    }
  }, [yPosition, trackYPos]);

  return (
    <div className="container">
      <Header />
      <Hero yPosition={yPosition}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}


