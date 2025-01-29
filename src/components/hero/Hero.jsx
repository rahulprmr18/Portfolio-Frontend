import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll
import ParticleBackground from '../../components/ParticleBackground';
import { useTheme } from '../../context/ThemeContext';
import './hero.css';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`hero ${theme}`}>
      <ParticleBackground />
      <h1 className="hero-title animated-text">
        Hi, I'm <span className="highlight">Rahul Parmar</span>
      </h1>
      <h2 className="hero-subtitle animated-text">
        A Passionate <span className="highlight">MERN Stack Developer</span>
      </h2>
      <br />
      <p className="hero-description animated-text">
        Welcome to my portfolio! I craft modern, scalable, and high-performing web applications using 
        <strong> MongoDB, Express.js, React,</strong> and <strong>Node.js</strong>. Whether it's building sleek 
        user interfaces or optimizing back-end architecture, I am dedicated to delivering efficient and 
        user-friendly solutions.
      </p>
      <div className="hero-buttons">
        {/* Smooth Scroll Button */}
        <ScrollLink
          to="projects" // Target section ID
          smooth={true} // Enable smooth scrolling
          duration={500} // Duration of scroll animation
          spy={true} // Track active state
          offset={-70} // Offset for sticky headers
          className="cta-btn animated-button primary-button"
        >
          View My Projects
        </ScrollLink>

        {/* Resume Download Button */}
        <a
          href="/RAHUL_PARMAR.pdf" // File in the public folder
          download="Rahul_Parmar_Resume.pdf" // Downloadable file name
          className="cta-btn animated-button secondary-button"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
