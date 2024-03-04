import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      {/* Fontawesome Github, LinkedIn and Youtube icons sourced from react-icons library. Target blank opens the link in a new window, noopener noreferrer settings are for security/contra-phishing */}
      <a href="https://github.com/kwubbenhorst" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/karla-wubbenhorst-846b6b294/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B6C%2Bu7G0HR1yPAP0TYJqCWw%3D%3D" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.youtube.com/channel/UCFyR9F96UyXtx9RZ9YK7_2A" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </footer>
  );
};

export default Footer;
