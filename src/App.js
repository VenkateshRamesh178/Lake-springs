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

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar showPopup={() => setShowPopup(true)} />
      <HeroBanner showPopup={() => setShowPopup(true)}/>
      <Overview />
      <Amenities />
      <Pricing showPopup={() => setShowPopup(true)}/>
      <FloorPlans showPopup={() => setShowPopup(true)}/>
      <LocationAdvantages />
      <ContactUs />
      <PopupForm show={showPopup} closePopup={() => setShowPopup(false)} />
      <footer className="footer">
        <p>RERA No. - PRM/KA/RERA/1251/310/PR/221024/007161</p>
        <p>The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may share data with RERA registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
