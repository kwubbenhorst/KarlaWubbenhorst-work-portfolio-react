// This file contains code for the card component which will be reused 12 times on the Portfolio page. Each card has a project image and a project-details class element, which includes the project title (a link to the deployed page or walkthrough video) and technologies byline (a link to the github repo)
// Links open in a new tab (target="_blank") and include an icon (Github or video) based on the presence of a walkthrough video (noted as a boolean field/flag where values are stored in the props over at Portfolio.jsx)
// This function allows for multiple dynamic rendering of the single component with the specific values stored in the props at Portfolio.jsx
import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaVideo } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

// The ProjectCard component is a functional component that takes props as its parameter.
// The destructuring assignment is used to extract specific properties from the props object.
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

  