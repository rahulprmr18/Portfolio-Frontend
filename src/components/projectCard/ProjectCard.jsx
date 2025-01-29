import React from 'react';
import './projectcard.css';

const ProjectCard = ({ project }) => {
  // Check if project data is valid
  if (!project) {
    return <div>Project data is unavailable.</div>;
  }

  // Check if essential fields exist
  const { image, title, description, technologies, githubLink } = project;

  if (!image || !title || !description || !technologies || !githubLink) {
    return <div>Project details are incomplete.</div>;
  }

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech">{tech}</span>
          ))}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
