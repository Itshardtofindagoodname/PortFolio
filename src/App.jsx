import React, { useState, useEffect } from 'react';
import Hero from "./pages/home"
import Skills from "./pages/skills"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Footer from "./pages/footer"
import {Helmet} from "react-helmet";

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'contact', 'footer'];
      const scrollPosition = window.scrollY;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Debarjun Thakur</title>
        <meta name="description" content="My Personal Portfolio listing all my skills and projects" />
      </Helmet>
      <div className="flex flex-col">
          <div id="hero" className={`section ${activeSection === 'hero' ? '' : 'white'}`}>
            <Hero />
          </div>
          <div id="skills" className={`section ${activeSection === 'skills' ? '' : 'white'}`}>
            <Skills />
          </div>
          <div id="projects" className={`section ${activeSection === 'projects' ? '' : 'white'}`}>
            <Projects />
          </div>
          <div id="contact" className={`section ${activeSection === 'contact' ? '' : 'white'}`}>
            <Contact />
          </div>
          <div id="footer" className={`section ${activeSection === 'footer' ? '' : 'white'}`}>
            <Footer />
          </div>
      </div>
      <div
        className="custom-cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
    </>
  );
}

export default App;
