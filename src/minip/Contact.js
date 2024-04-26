import React, { useState } from 'react';
import Footer1 from './Footer1';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
      alert("Submitted!");
      // You can perform additional actions like sending the form data to a server here
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className='contact-section'>
      <div className="group">
        <div className="text">
          Face any problem? Feel free to contact us 😊.
        </div><br></br>

        <form onSubmit={handleSubmit}> 
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} /><br></br>

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} /><br></br>

          <label htmlFor="message">Message: </label><br></br>
          <textarea id="message" cols="30" rows="4" value={formData.message} onChange={handleChange}></textarea><bR></bR>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer1 isVisible={true} />
    </div>
  );
}
