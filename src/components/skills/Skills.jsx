import React from 'react';
import './skills.css';

const Skills = ({ skills }) => {
  // Check if skills data is available
  if (!skills || Object.keys(skills).length === 0) {
    return <div>No skills data available.</div>;
  }

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {Object.keys(skills).map((category) => (
          <div key={category} className="skills-category">
            <h3 className="category-title">{category.toUpperCase()}</h3>
            <div className="skills-items">
              {skills[category].map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
