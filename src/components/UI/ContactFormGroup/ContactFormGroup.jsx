//This file contains code for the Contact Form component of the Contact page. 
import './ContactFormGroup.css';
import React, { useState } from 'react';

// The state variables name, email and message are created with the useState hook to hold the values of the input fields and text area. Initially they are set to an empty string.
// The updater functions setName, setEmail, and setMessage returned by the useState hook will update the values of name, email and message. They trigger when there is an onChange event in the input fields/text area.
// The state variable emailError holds an error message if the entered email is determined invalid by the regex test method, otherwise it holds an empty string.
// The updater function setEmailError returned by the useState hook will update the error message according to the validation test result
// The requiredFieldError state variable holds an error message if the any of the fields are left empty (triggered by the fields losing focus/onBlur event), otherwise it holds and empty string
// The updater function setRequireFieldError will update the error message based on the onBlur validation result

const ContactFormGroup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [requiredFieldError, setRequiredFieldError] = useState('');

  // Function to handle the 'onChange' event for the email input field. It updates the email state and validates the entered email using a regex.
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Regex to ensure a valid email format has been entered
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(value) ? '' : 'Invalid email address');
  };

  // Function to handle the onBlur event for the input fields. It checks for empty fields and performs email validation when the email field loses focus
  const handleBlur = (field) => {
    if (field === 'name' && !name.trim()) {
      setRequiredFieldError('Name is required');
    } else if (field === 'email') {
      // Check for email validation only if the field is not focussed, otherwise it will present the invalid message as the person is typing
      const value = email.trim();
      setRequiredFieldError('');
      setEmailError(value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '');
    } else if (field === 'message' && !message.trim()) {
      setRequiredFieldError('Message is required');
    } else {
      setRequiredFieldError('');
    }
  };

  // Function to handle the form submission. It prevents default, checks for required fields and displays an alert if any field is missing or if email is invalid. Although the inputs do not really get sent to the back end, an alert signals a successful submission if all fields are filled and if a valid email has been entered.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || emailError) {
      alert('Some fields are missing, please complete the form.');
      return 
    }

    // Note: I'll need to fill different logic for handleSubmit once my application has a back end. For now it is just sending an alert to verify submission and resetting the fields to an empty string
    alert('Form submitted successfully!');
      
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };
  
  // This component's render method returns jsx representing the structure of the contact form, with input fields for name, email and message and handlers for onChange, onBlur and onSubmit events. 
  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Name</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => handleBlur('name')} />
        </div>
        <div>
          <h3>Email Address</h3>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTimeout(() => handleBlur('email'), 0)} //timeOut is so handleBlur function is not called immediately when the user clicks outside the input field -- helps prevent unnecessary validations while user is still typing.
          onFocus={() => setEmailError('')} // Reset emailError when the field is focused
          />
          {emailError && <p className="invalid-email-msg">{emailError}</p>}
        </div>
        <div>
          <h3>Message</h3>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} onBlur={() => handleBlur('message')} />
        </div>
        <div>
          {requiredFieldError && <p className="req-field-msg">{requiredFieldError}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormGroup;

