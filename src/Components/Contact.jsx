import React, { useState } from 'react';
import backgroundImage from '../Assests/OIP.jpeg';
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const outer_div = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttacement : 'fixed',
    backgrounPosition: 'center',
    zIndex: 0, 
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
  };

  const internal_div = {
    padding: '50px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    borderRadius: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '18px',
    borderRadius: '5px',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '18px',
    borderRadius: '5px',
  };

  const btnStyle = {
    padding: '15px',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const handleSubmit = () => {
    // Simulate a successful submission
    setSuccessMessage('Message sent successfully!');
    // Reset form fields
    document.getElementById('contactForm').reset();
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div id='contact' style={outer_div}>
      <div style={internal_div}>
        <form id='contactForm' action='' method='post'>
          <input style={inputStyle} type='text' name='name' placeholder="Enter your full name" required /><br />
          <input style={inputStyle} type='email' name='email' placeholder="Enter your email" required /><br />
          <textarea style={textareaStyle} name='message' rows={10} placeholder="Enter the message" required></textarea><br />
          <input style={btnStyle} type='button' value="Submit" onClick={handleSubmit} /><br />
        </form>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
