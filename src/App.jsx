// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
//import Hero from './components/hero/Hero';
//import ProjectCard from './components/projectCard/ProjectCard';
//import Skills from './components/skills/Skills';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';
import './App.css';
import ErrorPage from './components/error/ErrorPage';  // Import the ErrorPage component

function ScrollToSection() {
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToSection /> {/* Smooth scroll on route change */}
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<ErrorPage />} /> {/* Show error page for unknown routes */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
