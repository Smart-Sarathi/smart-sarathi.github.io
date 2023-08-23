// components/TestimonialCard.js
import React from 'react';
import './TestimonialCard.css';

function TestimonialCard() {
  return (
    <section className="testimonial">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-card">
        <img
          src="https://placeimg.com/100/100/people"
          alt="Customer"
          className="testimonial-avatar"
        />
        <p>
          "Had the most amazing experience of my life! The destination was
          magical, and the service was top-notch."
        </p>
        <span className="testimonial-name">- Jane Doe</span>
      </div>
    </section>
  );
}

export default TestimonialCard;
