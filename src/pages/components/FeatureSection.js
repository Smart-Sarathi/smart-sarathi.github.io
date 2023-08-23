// components/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

function FeatureSection() {
  return (
    <section className="feature-section">
      <h2>Explore Our Features</h2>
      <div className="features">
        <div className="feature">
          <i className="fas fa-map-marked-alt"></i>
          <h3>Wide Range of Destinations</h3>
          <p>Discover various breathtaking places.</p>
        </div>
        <div className="feature">
          <i className="fas fa-plane"></i>
          <h3>Easy Booking</h3>
          <p>Book your trip hassle-free.</p>
        </div>
        <div className="feature">
          <i className="fas fa-umbrella-beach"></i>
          <h3>Relax and Enjoy</h3>
          <p>Unwind and create unforgettable memories.</p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
