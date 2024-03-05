import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, deployLink, githubLink, image }) => {
  return (
    <div className="project-card">
      <img className="project-card-img" src={image} alt={title} />
      <div className="project-details">
        <h1>
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h1>
        <h2>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Technologies
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;

  