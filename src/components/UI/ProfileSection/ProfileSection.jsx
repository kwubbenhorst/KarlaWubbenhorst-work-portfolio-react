// This file contains code for the Profile Section component. Basically the component is the whole of the AboutMe page. It is comprised of an h2, an img and a p blurb.
import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  return (
    <div className='about-me-container' >
      <h2>About Me</h2>
        <div className='content-row'>
        <img className='profile-pic' src="./src/assets/images/karla.png" alt="Head profile picture of Karla Wubbenhorst" />
          <p>
            Full stack development is quite a career swerve from what I was doing before: pastoral ministry. 
            During my 10 years of post-secondary education in classics and divinity, my 4 years of university teaching
            in theology, and 15 years of leading a congregation in Guelph, Ontario, I acquired many soft skills
            which transfer well to the work of a full stack developer. My academic background has given me the love
            of learning and the knowledge of how to learn — an ongoing part of any role in the constantly evolving tech field.
            My congregational leadership background has honed my skills in communication, collaboration, project management,
            and organizational systems. It was during my ministry years that I became interested in the power of well-designed
            tech media as a platform for The Message and as a first-line interface between organizations and their subscribers.
            <br></br><br></br>At a little beyond mid-career, I took on the challenge of learning to code. I have been coding intensively 
            every day since July 2023 and have discovered a love for the building process. If only there were enough hours in the day to
            develop every useful, elegant app my mind can envision! Both front and back-end work have their appeal for me. Thanks to a rigorous 
            course of formal instruction (completed March 2024) I have developed clean coding habits and an awareness of best practices 
            and current industry trends. At this point I am proficient in the MERN stack and associated technologies (see full CV and highlighted 
            proficiencies at the resume page) and have the necessary foundation in programming logic that will allow me to expand my languages array beyond Javascript as a next step. While my learning 
            will continue forever, I look forward to launching myself in this new career and tailoring my growth to what is needed in my role at 
            your company. I can consider on-location employment in the Guelph / GTA / Kitchener-Waterloo area or in Calgary where I also have a 
            home, though my preference is for working remotely. When I'm not coding, I enjoy travelling, writing, and gardening.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;

