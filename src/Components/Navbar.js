import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ showPopup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close the menu on link click (for mobile)
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="logo.png" alt="NCC Lake Springs" />
        <h6>Authorised sales partner</h6>
      </div>

      {/* Hamburger Menu Icon (for mobile) */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
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
          8310933745
        </a>
        <button className="enquire-button" onClick={showPopup}>
          Download Brochure
        </button>
        <button className="enquire-button" onClick={showPopup}>
          Enquire Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
