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

