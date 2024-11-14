import React from 'react';
import './Overview.css';
import img1 from '../assets/features.PNG'

const Overview = () => {
  return (
    <section className="overview-section">
      {/* Background Image with Text Overlay */}
      <div className="overview-content">
      <h2>Why NCC Lake Springs</h2>
      <p>Here you will find a rare combination of sophistication, convenience and peace.</p>
      <p>Wake up to lakeside views, unwind in landscaped gardens, and connect with a like-minded community - all while enjoying access to Bengaluru's hubs.</p>
      <p>This is more than a home; It is a thoughtfully curated living experience!</p>
      </div>

      {/* Full-Sized Image Under the Overview Section */}
      <div className="overview-image">
        <img src={img1} alt="NCC Lake Springs Project" />
      </div>
    </section>
  );
};

export default Overview;
