import React from 'react';

const Resume = () => {
  const pdfPath = process.env.PUBLIC_URL + '/WubbenhorstCV.pdf';

  return (
    <div>
      <h2>Resume:</h2>
      <p>Click the link below to view my resume:</p>
      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open Resume
      </a>
    </div>
  );
};

export default Resume;
