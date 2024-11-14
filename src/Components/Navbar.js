import React from 'react';
import './Navbar.css';

const Navbar = ({ showPopup }) => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="logo.png" alt="NCC Lake Springs" />
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li onClick={() => handleScroll('overview')}>Overview</li>
        <li onClick={() => handleScroll('amenities')}>Amenities</li>
        <li onClick={() => handleScroll('pricing')}>Pricing</li>
        <li onClick={() => handleScroll('floorplans')}>Floor Plans</li>
        <li onClick={() => handleScroll('location')}>Location</li>
        <li onClick={() => handleScroll('contact')}>Contact Us</li>
      </ul>

      {/* Call and Enquire Now Buttons */}
      <div className="navbar-buttons">
        <a href="tel:+91 8310933745" className="call-button">
          Call Now
        </a>
        <button className="enquire-button" onClick={showPopup}>
          Enquire Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
