import React from 'react';
import './FloorPlans.css';

const floorPlansList = [
  { name: '3 BHK Floor Plan', img: '3bhk.jpg' },
  { name: '3.5 BHK Floor Plan', img: '3.5bhk.jpg' },
];

const FloorPlans = ({ openPopup }) => {
  return (
    <section id="floorplans" className="floorplans-section">
      <h2>Explore Our Floor Plans</h2>
      <div className="floorplans-grid">
        {floorPlansList.map((plan, index) => (
          <div key={index} className="floorplan-card">
            <img src={`assets/${plan.img}`} alt={plan.name} />
            <h3>{plan.name}</h3>
            <button onClick={openPopup}>Get Floor Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloorPlans;
