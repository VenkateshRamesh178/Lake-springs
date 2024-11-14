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
    
    // Check if name and phone fields are filled
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Use emailjs to send form data
    emailjs
      .send(emailConfig.serviceId, emailConfig.templateId, formData, emailConfig.userId)
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ name: '', phone: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message, please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactUs;
