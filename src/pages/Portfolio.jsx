// This file, Portfolio.jsx, is a React component that represents the Portfolio page of the application.
// It is responsible for rendering 12 instances of the ProjectCard component and it organizes these cards in four page sections (the different technology stacks).
// The ProjectCard component generates each individual project card, and the data for each card is passed through props.
// The props given definite values here in this file are passed to ProjectCard.jsx to customize each card's content, including
// title, deployment link, GitHub link, image, whether it has a walkthrough video, and the technologies used.
// The stylesheet attached to this page styles the page layout and sections and section heading elements.
// The stylesheet attached to ProjectCard.jsx contains all the styling needed for the card components.

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
            title="Brimloft: Ecommerce/Hat Store"
            deployLink="https://brim-loft-22a58ce3b819.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/brim-loft"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794167/brim-loft-screenshot_qljnz0.png"
            technologies="HTML, CSS, JavaScript, Handlebars, Node.js, Express, MySQL, Sequelize, bcrypt, Session, Session Storage"
          />
          <ProjectCard
            title="Offline Text Editor: PWA Application"
            deployLink="https://off-line-text-editor-2797b90d319f.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/offline-text-editor"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794167/offline-text-editor-screenshot_ppzkyc.png"
            technologies="HTML, CSS, JavaScript(ES6+), Node.js, Express, IndexedDB, Webpack, Babel, Workbox, ServiceWorker, concurrently"
          />
        </div>
        <div className="project-row"> 
          <ProjectCard
            title="Note Taker"
            deployLink="https://mighty-peak-97705-5192cd0d820f.herokuapp.com/"
            githubLink="https://github.com/kwubbenhorst/"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794167/note-taker-screenshot_r6p2mu.png"
            technologies="HTML, CSS, JavaScript, Node.js, Express.js, REST, fs module, db.json" 
          />
          <ProjectCard
            title="My Professional Portfolio"
            deployLink="#"
            githubLink="https://github.com/kwubbenhorst/KarlaWubbenhorst-work-portfolio-react"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794168/professional-portfolio-screenshot_rrweti.png"
            technologies="HTML, CSS, JavaScript, Node.js, React, Vite, React DOM, React-router-DOM, React icons, Font Awesome, Google Fonts"
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
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794168/coding-assessment-quiz-screenshot_gyqxne.png"
            technologies="HTML, CSS, JavaScript, Local Storage, Bootstrap"
          />
          <ProjectCard
            title="Workday Scheduler"
            deployLink="https://kwubbenhorst.github.io/work-day-scheduler/"
            githubLink="https://github.com/kwubbenhorst/work-day-scheduler"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794170/workday-scheduler-screenshot_aqlr2q.png"
            technologies="HTML, CSS, JavaScript, Bootstrap, jQuery, Font Awesome, Google Fonts, day.js"
          />
        </div>
        <div className="project-row"> 
          <ProjectCard
            title="Weather Dashboard"
            deployLink="https://kwubbenhorst.github.io/weather-dashboard/"
            githubLink="https://github.com/kwubbenhorst/weather-dashboard"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794170/weather-dashboard-screenshot_d0xywo.png"
            technologies="HTML, CSS, Bootstrap, JavaScript, jQuery, Google Fonts, Open Weather Map API, Timezone DB API, day.js" 
          />
          <ProjectCard
            title="Kitchen Elevation"
            deployLink="https://kwubbenhorst.github.io/kitchen_elevation/"
            githubLink="https://github.com/kwubbenhorst/kitchen_elevation"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794167/kitchen-elevation-screenshot_x8woab.png"
            technologies="HTML, CSS, JavaScript, Bootstrap, Google Fonts, Local Storage, Spoonacular API, CocktailDB API"
          />
        </div>
      </div>
      
      {/* Bad-Ass Back-Ends Section */}
      <div className="bad-ass-back-ends-container">
        <h2 className="bad-ass-title">Bad-Ass Back-Ends</h2>
          <ProjectCard
            title="Thought Share API: Social Netwk backend"
            deployLink="https://drive.google.com/file/d/14F-yLkn3o3_rlxD4BSp84KkrM-qJ2VvU/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/thought-share-API"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794170/thought-share-api-screenshot_bpauqt.png"
            technologies="Node.js, Express, REST, MongoDB, Mongoose, moment.js"
            hasWalkthroughVideo={true}
          />
          <ProjectCard
            title="Clothes and Music EStore"
            deployLink="https://drive.google.com/file/d/1aumZkV58yrni1EIrGTqx4hHYNj6gBZ03/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/clothes-and-music-estore"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794167/clothes-and-music-estore-screenshot_xondzy.png"
            technologies="Node.js, Express, REST, MySQL, Sequelize"
            hasWalkthroughVideo={true}
          /> 
      </div>
    
      {/* Nifty Node /CLI Apps */}
      <div className="nifty-node-cli-apps-container">
        <h2 className="nifty-node-title">Nifty Node/CLI Apps</h2>
          <ProjectCard
            title="SVG Logo Maker"
            deployLink="https://drive.google.com/file/d/1sFQZ27DPwe7CNRPli-_B7LwKHaMQNfgW/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/SVG-logo-maker"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794170/svg-logo-maker-screenshot_xlazcs.png"
            technologies="Node.js, Inquirer, Jest, ESM (ECMAScript Modules)"
            hasWalkthroughVideo={true}
          />
          <ProjectCard
            title="README Generator"
            deployLink="https://drive.google.com/file/d/1ce1wGR04fKJbhYsFqcbmykHqSks9MPMr/view?usp=drive_link"
            githubLink="https://github.com/kwubbenhorst/README-generator"
            image="https://res.cloudinary.com/dqtpaispt/image/upload/v1709794168/readme-generator-screenshot_becheq.png"
            technologies="Node.js, Inquirer, fs module"
            hasWalkthroughVideo={true}
          />
      </div>
    </div>
  );
};

export default Portfolio;

