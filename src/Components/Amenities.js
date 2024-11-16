import React from 'react';
import './Amenities.css';
import pool from '../assets/pool.jpg';
import gym from '../assets/gym.jpg';
import playpen from '../assets/playpen.jpg';
import hall from '../assets/hall.jpg';
import more from '../assets/more.jpg';

const amenitiesList = [
  { name: 'Party Hall', img: hall },
  { name: 'Swimming Pool', img: pool },
  { name: 'Gymnasium', img: gym },
  { name: 'Kids Play Area', img: playpen },
  { name: 'And many more', img: more}
];

const Amenities = () => {
  return (
    <section id="amenities" className="amenities-section">
      <h2>Our Premium Amenities</h2>
      <div className="amenities-grid">
        {amenitiesList.map((amenity, index) => (
          <div key={index} className="amenity-card">
            <img src={amenity.img} alt={amenity.name} />
            <h3>{amenity.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
