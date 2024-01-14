// Add.jsx (Parent Component)
import React, { useState } from 'react';
import backgroundImage from '../Assests/R.jpeg';
import List from './List';

const Add = () => {
  const comp = {
    padding: '100px',
    backgroundColor : 'rgb(0,0,0,0.3)'  
  };

  const outer_div = {
    paddingLeft: '250px',
    paddingTop: '120px',
    paddingBottom: '100px',
    paddingRight: '250px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat',
    backgroundAttacement : 'fixed',
    backgrounPosition: 'center',
    zIndex: 0, 
    fontFamily: 'Arial, sans-serif',
  };

  const input_format = {
    height: '50px',
    width: '600px',
  };

  const input_textarea = {
    height: '150px',
    width: '600px',
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    width: '600px',
    paddingLeft: '25px',
  };

  const buttonStyle = {
    padding: '10px',
    width: '150px',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 255, 0.6)',
    color: 'white',
    fontSize: '15px',
  };

  const [formData, setFormData] = useState({ title: '', message: '' });
  const [listData, setListData] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === '' || formData.message.trim() === '') {
      alert('Please enter both title and message.');
      return;
    }
    setListData([...listData, formData]);
    setFormData({ title: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id='add' style={outer_div}>
      <div style={comp}>
        <form onSubmit={handleFormSubmit}>
          <input style={input_format} type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Enter title of todo" /><br />
          <textarea name="message" style={input_textarea} rows='10' cols='20' value={formData.message} onChange={handleInputChange} placeholder="Enter the message"></textarea><br />
          <br />
          <div style={buttonContainer}>
            <input style={buttonStyle} type="submit" value="Add" />
          </div>
        </form>
      </div>
      <List listData={listData} />
    </div>
  );
};

export default Add;
