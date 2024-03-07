// This file contains code that will render the About Me page (the whole content of the page is imported from the component in ProfileSection.jsx). Other pages have their own stylesheets, as well as the components having stylesheets, but in this case all the styling is done on the component before it is imported so there is no corresponding stylesheet for this file
// Because the About Me page is also the landing page/home page, useNavigate and useEffect hooks are used to automatically navigate to the default route ("/about") upon component mount. 
// The useNavigate hook is employed to programmatically navigate between pages, and the useEffect hook triggers this navigation when the component is initially mounted. So users are directed to the About Me page as the home page.
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileSection from '../components/UI/ProfileSection/ProfileSection';

const AboutMe = () => {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  //Use useEffect to navigate to the default route ("/about" on component mount)
  useEffect(() => {
    navigate('/about');
  }, [navigate]);
  
  return (
    <div className="main-content">
      <ProfileSection />
    </div>
  );
};

export default AboutMe;
