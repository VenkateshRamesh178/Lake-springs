import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import Overview from './Components/Overview';
import Amenities from './Components/Amenities';
import Pricing from './Components/Pricing';
import FloorPlans from './Components/FloorPlans';
import LocationAdvantages from './Components/LocationAdvantages';
import ContactUs from './Components/ContactUs';
import PopupForm from './Components/PopupForm';
import './index.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupHeading, setPopupHeading] = useState('');

  // Automatically show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupHeading('Interested in Our Project?');
      setShowPopup(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Function to open popup with a specific heading
  const openPopup = (heading) => {
    setPopupHeading(heading);
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
    setPopupHeading('');
  };

  return (
    <div className="App">
      {/* Navbar Component with popup trigger */}
      <Navbar showPopup={openPopup} />

      {/* Other sections of the website */}
      <HeroBanner showPopup={() => openPopup('Download Brochure')} />
      <Overview />
      <Amenities />
      <Pricing showPopup={() => openPopup('Get Pricing Details')} />
      <FloorPlans showPopup={() => openPopup('Get Floor Plan')} />
      <LocationAdvantages />
      <ContactUs />

      {/* Popup Form Component */}
      <PopupForm show={showPopup} closePopup={closePopup} heading={popupHeading} />

      {/* Footer Section */}
      <footer className="footer">
        <p>RERA No. - PRM/KA/RERA/1251/310/PR/221024/007161</p>
        <p>
          The content is for information purposes only and does not constitute an offer to avail of
          any service. Prices mentioned are subject to change without notice and properties
          mentioned are subject to availability. Images for representation purposes only. This is
          the official website of an authorized marketing partner. We may share data with RERA
          registered brokers/companies for further processing. We may also send updates to the
          mobile number/email id registered with us. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
