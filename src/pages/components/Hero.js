// components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Company Quote</h1>
        <p>Your inspiring message here.</p>
      </div>
      <img
        src="https://placeimg.com/800/600/nature"
        alt="Travel Destination"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
