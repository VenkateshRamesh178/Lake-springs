import React from 'react';
import './Pricing.css';

const Pricing = ({showPopup}) => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-table">
        <div className="pricing-card">
          <h3>3 BHK</h3>
          <p>Size: 1622 - 2085 sq.ft.</p>
          <p>Starting Price: ₹1.62 Cr*</p>
          <button onClick={showPopup}>Enquire Now</button>
        </div>
        <div className="pricing-card">
          <h3>3.5 BHK</h3>
          <p>Size: 2168 sq.ft.</p>
          <p>Starting Price: ₹2.36 Cr</p>
          <button onClick={showPopup}>Enquire Now</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
