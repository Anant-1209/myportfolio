import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolio';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-slate-200 selection:bg-emerald-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      
      <Navbar scrollTo={scrollTo} activeSection={activeSection} />
      
      <main>
        <Hero data={portfolioData} scrollTo={scrollTo} />
        <About data={portfolioData} />
        <Experience data={portfolioData} />
        <Projects data={portfolioData} />
        <Skills data={portfolioData} />
        <Certifications data={portfolioData} />
        <Achievements data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <Footer data={portfolioData} />

    </div>
  );
};

export default App;