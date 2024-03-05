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
