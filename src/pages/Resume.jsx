import React from 'react';
import pdfPath from '../assets/WubbenhorstCV.pdf';
const Resume = () => {
  
  return (
    <div className='main-content'>
      <h2>Resume</h2>
      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open as downloadable pdf
      </a>
    </div>
  );
};

export default Resume;
