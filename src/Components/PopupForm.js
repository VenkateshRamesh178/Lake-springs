import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailConfig from '../emailConfig';
import './PopupForm.css';

const PopupForm = ({ show, closePopup, heading }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    emailjs
      .send(emailConfig.serviceId, emailConfig.templateId, formData, emailConfig.userId)
      .then(
        () => {
          alert('Message sent successfully!');
          closePopup();
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  if (!show) return null; // Ensure this returns null if not visible

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{heading}</h2> {/* Display the heading */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
          <button type="button" onClick={closePopup}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
