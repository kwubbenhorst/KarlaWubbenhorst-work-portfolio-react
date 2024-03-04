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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Regex to ensure a valid email format has been entered
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(e.target.value) ? '' : 'Invalid email address');
  };

  const handleBlur = (field) => {
    if (field === 'name' && !name.trim()) {
      setRequiredFieldError('Name is required');
    } else if (field === 'email' && !email.trim()) {
      setRequiredFieldError('Email is required');
    } else if (field === 'message' && !message.trim()) {
      setRequiredFieldError('Message is required');
    } else {
      setRequiredFieldError('');
    }
  };

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
          <input type="text" value={email} onChange={handleEmailChange} onBlur={() => handleBlur('email')} />
          {emailError && <p>{emailError}</p>}
        </div>
        <div>
          <h3>Message</h3>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} onBlur={() => handleBlur('message')} />
        </div>
        <div>
          {requiredFieldError && <p>{requiredFieldError}</p>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormGroup;

