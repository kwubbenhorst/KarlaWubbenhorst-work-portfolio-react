// This file renders the main-content section of the Contact page. It imports the ContactFormGroup component from a separate file in the components/UI folder, and adds an email link, a hardcoded phone number and an image and quote to fill up the blank space at the right of the page.
// Validations on the form inputs and submission are handled in ContactFormGroup.jsx
import './Contact.css';
import React from 'react';
import ContactFormGroup from '../components/UI/ContactFormGroup/ContactFormGroup';

const Contact = () => {
  return (
    <div className='main-content main-contact'>
      <img className='stones-pic' src="src/assets/images/stones2.jpg" alt="Picture of beach pebbles" />
      <div className='quote-container'>
      <p className='knuth-quote'>People think that computer science is the art of geniuses but the reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.&nbsp;&nbsp;&nbsp;~ Donald Knuth</p>
      </div>
      <ContactFormGroup />
      <h3 className="contact-by-email">Contact by Email: <a className="email-link" href="mailto:kwubbenhorst@gmail.com">kwubbenhorst@gmail.com</a></h3>
      <h3 className="contact-by-phone">Contact by Phone: +1 (519) 803 0075</h3>
      
    </div>
  );
};

export default Contact;

