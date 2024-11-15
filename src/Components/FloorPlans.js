import React from 'react';
import './FloorPlans.css';
import img1 from '../assets/3bhk.PNG'
import img2 from '../assets/3.5bhk.PNG'
const floorPlansList = [
  { name: '3 BHK Floor Plan', img: img1 },
  { name: '3.5 BHK Floor Plan', img: img2 },
];

const FloorPlans = ({showPopup}) => {
  return (
    <section id="floorplans" className="floorplans-section">
      <h2>Explore Our Floor Plans</h2>
      <div className="floorplans-grid">
        {floorPlansList.map((plan, index) => (
          <div key={index} className="floorplan-card">
            <img src={plan.img} alt={plan.name} />
            <h3>{plan.name}</h3>
            <button onClick={showPopup}>Get Floor Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FloorPlans;
