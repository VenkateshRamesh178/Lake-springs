import React from 'react';
import './LocationAdvantages.css';

const LocationAdvantages = () => {
  return (
    <section id="location" className="location-section">
      <div className="location-content">
        {/* Left Column - Location Points */}
        <div className="location-details">
          <h2>Location Advantages</h2>
          <ul>
            <li>3 km from Konankunte Metro Station</li>
            <li>3 km from Forum Mall</li>
            <li>3 km for Delhi Public School</li>
            <li>4 km from Astra Multispeciality Hospital</li>
            <li>Close proximity to schools, hospitals, and shopping centers</li>
          </ul>
        </div>

        {/* Right Column - Embedded Google Map */}
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.4105253953735!2d77.56495184688161!3d12.866377430290589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b7ce9247083%3A0x485e446d2a63b3e!2sNCC%20Urban%20Lake%20Springs!5e0!3m2!1sen!2sin!4v1731603824185!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Godrej Yeshwanthpur Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
