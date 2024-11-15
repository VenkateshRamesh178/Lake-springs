import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import emailConfig from '../emailConfig';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

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
          setFormData({ name: '', phone: '', email: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact-us">
      <div className="contact-wrapper">
        <div className="about-content">
          <h2>About the Project</h2>
          <p>
            A residence for those who value timeless elegance and modern comfort.
            Located in JP Nagar, South Bengaluru, NCC Urban Lake Springs, offers thoughtfully 
            crafted 3 and 3.5 BHK homes that elevate your everyday experience. 
          </p>
        </div>
        <div className="form-container">
          <h3>Enquire Now !</h3>
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
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email (optional)"
              value={formData.email}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
