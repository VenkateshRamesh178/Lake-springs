import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailConfig from '../emailConfig';
import './HeroBanner.css';

const HeroBanner = ({ showPopup }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

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
      .then(() => {
        alert('Your site visit has been booked!');
        setFormData({ name: '', phone: '' });
      })
      .catch((error) => {
        console.error('Failed to book site visit:', error);
        alert('Failed to book site visit, please try again later.');
      });
  };

  return (
    <section className="hero-banner">
      <div className="hero-content">
        {/* Left Side Content */}
        <div className="project-info">
          <h1><mark>NCC Lake Springs</mark></h1>
          <p><mark>Luxury 3 & 3.5 BHK Apartments</mark></p>
          <ul>
            <li><mark>Area: 4.72 Acres</mark></li>
            <li><mark>Units: 272 Premium Apartments</mark></li>
            <li><mark>Starting Price: ₹ 1.62 Cr*</mark></li>
          </ul>
          <button onClick={showPopup} className="download-brochure">
            Download Brochure
          </button>
        </div>

        {/* Right Side Form */}
        <div className="book-visit-form">
          <h2>Book a Site Visit</h2>
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
