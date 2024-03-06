import React from 'react';
import pdfPath from '../assets/WubbenhorstCV.pdf';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className='main-content resume'>
      <h2>Resume</h2>
      <div className='cv-download-link-container'>
      <a className='cv-download-link' href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open as downloadable pdf
      </a>
      </div>

      <div className="resume-column">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="resume-column">
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>Mongo DB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div className="resume-column">
        <h3>Soft-skills</h3>
        <ul>
          <li>Oral & Written Communication</li>
          <li>High-level & Detail-oriented analysis</li>
          <li>Collaboration & Independence</li>
          <li>Leadership & People-skills</li>
        </ul>
      </div>

      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open as downloadable pdf
      </a>
    </div>
  );
};

export default Resume;

