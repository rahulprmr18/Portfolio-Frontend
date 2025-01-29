import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero/Hero';
import AboutMe from '../../components/aboutme/AboutMe';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';
import ProjectCard from '../../components/projectCard/ProjectCard';
import './home.css';

// Import the images
import LapBMM from '../../assets/Lap_BMM.jpeg';
import LapLernify from '../../assets/Lap_lernify.jpeg';
import InterviweLap from '../../assets/Interviwe_Lap.png';

const Home = () => {
  const [projects] = useState([
    {
      title: "BookMyMeal - Admin Panel",
      description: "Designed and implemented a comprehensive admin panel for a meal booking system.",
      technologies: ["HTML","CSS","React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/rahulprmr18/BookMyMeal",
      image: LapBMM,
    },
    {
      title: "Lernify",
      description: "Developed a fully-featured e-learning platform with user authentication and course management.",
      technologies: ["HTML","CSS","React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/rahulprmr18/Lernify-backend",
      image: LapLernify,
    },
    {
      title: "Interview Scheduler",
      description: "Built a calendar-based app for HRs to manage interview time slots with CRUD functionality and conflict prevention. Optionally included multi-HR login.",
      technologies: ["React", "HTML","CSS", "Node.js"],
      githubLink: "https://github.com/rahulprmr18/mern-interview-scheduler",
      image: InterviweLap,
    },
  ]);

  const [skills] = useState({
    frontend: [
      { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
      { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "ReactJs", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    ],
    backend: [
      { name: "NodeJs", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      { name: "ExpressJs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    ],
    database: [
      { name: "MongoDB", logo: "https://www.svgrepo.com/show/331488/mongodb.svg" },
      { name: "MySQL", logo: "https://cdn-icons-png.flaticon.com/512/528/528260.png" },
    ],
    tools: [
      { name: "VSCode", logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
      { name: "Git & GitHub", logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
    ],
  });

  return (
    <div className="home-container">
      <Hero />
      <AboutMe />
      <section id="projects" className="project-section">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <Skills skills={skills} />
      <Contact />
    </div>
  );
};

export default Home;
