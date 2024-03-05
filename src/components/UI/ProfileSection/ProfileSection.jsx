import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  return (
    <div className='about-me-container' >
      <h2>About Me</h2>
        <div className='content-row'>
          <img className='profile-pic' src="src/assets/images/karla14.png" alt="Head profile picture of Karla Wubbenhorst" />
          <p>
            Full stack development is quite a career swerve from what I was doing before: pastoral ministry. 
            During my 10 years of post-secondary education in classics and divinity, my 4 years of university teaching
            in theology, and 15 years of leading a congregation in Guelph, Ontario, I acquired many soft skills
            which transfer well to the work of a full stack developer. My academic background has given me the love
            of learning and the knowledge of how to learn — an ongoing part of any role in the constantly evolving tech field.
            My congregational leadership background has honed my skills in communication, collaboration, project management,
            and organizational systems. It was during my ministry years that I became interested in the power of well-designed
            tech media as a platform for The Message and as a first-line interface between organizations and their subscribers.
            At a little beyond mid-career, I took on the challenge of learning to code, and while my learning will continue forever,
            I look forward to launching myself in this new career and tailoring my growth to what is needed in my role at your company.
            I enjoy travelling, writing, and gardening, and am happy to travel for work or work remotely.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;

