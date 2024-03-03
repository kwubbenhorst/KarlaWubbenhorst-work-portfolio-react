import React from 'react';
import ContactFormGroup from '../components/UI/ContactFormGroup/ContactFormGroup';

const Contact = () => {
  return (
    <div>
      <ContactFormGroup />
      <h3>Contact by Email: <a href="mailto:kwubbenhorst@gmail.com">kwubbenhorst@gmail.com</a></h3>
      <h3>Contact by Phone: +1 (519) 803 0075</h3>
    </div>
  );
};

export default Contact;

