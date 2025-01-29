// src/components/header/Header.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Toggle } from '../toggle/Toggle';
import './header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleChange = () => {
    toggleTheme();
  };

  const handleNavClick = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Set the body theme initially based on localStorage or default to light
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Portfolio</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link"
                onClick={() => handleNavClick('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/skills"
                className="nav-link"
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="toggle-container">
          <Toggle handleChange={handleToggleChange} isChecked={theme === 'dark'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
