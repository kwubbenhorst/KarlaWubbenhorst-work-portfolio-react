import React from 'react';
import pdfPath from '../assets/WubbenhorstCV.pdf';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className='main-content'>
      <div className='heading-and-link'>
        <h2>Resume</h2>
        <div className='cv-download-link-container'>
          <a className='cv-download-link' href={pdfPath} target="_blank" rel="noopener noreferrer">
            Open full CV as pdf for download
          </a>
        </div>
      </div>

      <div className='proficiencies-row'>
        <div className='resume-column'>
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

        <div className='resume-column'>
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

        <div className='resume-column'>
          <h3>Soft-skills</h3>
          <ul>
            <li>Excellence in Oral & Written Communication</li>
            <li>High-level & Detail-oriented analytical ability</li>
            <li>Able to work Collaboratively or Independently</li>
            <li>Skills in Leadership & Working with People</li>
            <li>High in Conscientiousness & Openness</li>
            <li>An Agile-minded, Life-long Learner</li>
            <li>Able to use AI & other tools judiciously</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

