import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaVideo } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const ProjectCard = ({ title, deployLink, githubLink, image, hasWalkthroughVideo, technologies }) => {
  return (
    <div className="project-card">
      <img className="project-card-img" src={image} alt={title} />
      <div className="project-details">
        <h1 className="project-title">
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            {title}{' '}
            {hasWalkthroughVideo ? (<FaVideo title="Walkthrough Video" />) : (<IoMdGlobe title="Deployed Application" />)}
          </a>
        </h1>
        <h2 className="technologies-byline">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {technologies ? `${technologies} ` : ''}<FaGithub title="Repo at Github" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;

  