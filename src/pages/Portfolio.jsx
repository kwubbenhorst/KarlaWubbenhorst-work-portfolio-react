import React from 'react';
import ProjectCard from '../components/UI/ProjectsSection/ProjectCard.jsx';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="main-content-portfolio-page"> 
      {/* Fabulously Full-Stack Section */}
      <div className="fabulously-full-stack-container">
      <h2 className="fabulously-fs-title">Fabulously Full-Stack</h2>  
        <div className="project-row">
          <ProjectCard
            title="Brimloft"
            deployLink="https://brim-loft-22a58ce3b819.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/brim-loft"
            image="../../src/assets/images/brim-loft-screenshot.png"
          />
          <ProjectCard
            title="Offline Text Editor"
            deployLink="https://off-line-text-editor-2797b90d319f.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/offline-text-editor"
            image="../../src/assets/images/offline-text-editor-screenshot.png"
          />
        </div>
        <div className="project-row"> 
          <ProjectCard
            title="Note Taker"
            deployLink="https://mighty-peak-97705-5192cd0d820f.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/"
            image="../../src/assets/images/note-taker-walkthrough-video.gif" 
          />
          <ProjectCard
            title="My Professional Portfolio"
            deployLink="#"
            githubLink="https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react"
            image="../../src/assets/images/placeholder-screenshot.png"
          />
        </div>
      </div>
      
      {/* Fresh-Faced Front-Ends Section */}
      <div className="fresh-faced-front-ends-container">
      <h2 className="fresh-faced-title">Fresh-Faced Front-Ends</h2>
        <div className="project-row">
          <ProjectCard
            title="Coding Quiz"
            deployLink="https://kwubbenhorst.github.io/coding-assessment-quiz/"
            githubLink="https://github.com/kwubbenhorst/coding-assessment-quiz"
            image="../../src/assets/images/coding-assessment-quiz-screenshot.png"
          />
          <ProjectCard
            title="Workday Scheduler"
            deployLink="https://kwubbenhorst.github.io/work-day-scheduler/"
            githubLink="https://github.com/kwubbenhorst/work-day-scheduler"
            image="../../src/assets/images/workday-scheduler-screenshot.png"
          />
        </div>
        <div className="project-row"> 
          <ProjectCard
            title="Weather Dashboard"
            deployLink="https://kwubbenhorst.github.io/weather-dashboard/"
            githubLink="https://github.com/kwubbenhorst/weather-dashboard"
            image="../../src/assets/images/weather-dashboard-screenshot.png" 
          />
          <ProjectCard
            title="Kitchen Elevation"
            deployLink="https://kwubbenhorst.github.io/kitchen_elevation/"
            githubLink="https://github.com/kwubbenhorst/kitchen_elevation"
            image="../../src/assets/images/kitchen-elevation-screenshot.png"
          />
        </div>
      </div>
      
      {/* Bad-Ass Back-Ends Section */}
      <div className="bad-ass-back-ends-container">
        <h2 className="bad-ass-title">Bad-Ass Back-Ends</h2>
          <ProjectCard
            title="Thought Share API"
            deployLink="https://drive.google.com/file/d/14F-yLkn3o3_rlxD4BSp84KkrM-qJ2VvU/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/thought-share-API"
            image="../../src/assets/images/thought-share-API-walkthrough-video.mp4"
          />
          <ProjectCard
            title="Clothes and Music EStore"
            deployLink="https://drive.google.com/file/d/1aumZkV58yrni1EIrGTqx4hHYNj6gBZ03/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/clothes-and-music-estore"
            image="../../src/assets/images/placeholder-screenshot.png"
          /> 
      </div>
    
      {/* Nifty Node /CLI Apps */}
      <div className="nifty-node-cli-apps-container">
        <h2 className="nifty-node-title">Nifty Node/CLI Apps</h2>
          <ProjectCard
            title="SVG Logo Maker"
            deployLink="https://drive.google.com/file/d/1sFQZ27DPwe7CNRPli-_B7LwKHaMQNfgW/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/SVG-logo-maker"
            image="../../src/assets/images/placeholder-screenshot.png"
          />
          <ProjectCard
            title="README Generator"
            deployLink="https://drive.google.com/file/d/1ce1wGR04fKJbhYsFqcbmykHqSks9MPMr/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/README-generator"
            image="../../src/assets/images/placeholder-screenshot.png"
          />
      </div>
    </div>
  );
};

export default Portfolio;

