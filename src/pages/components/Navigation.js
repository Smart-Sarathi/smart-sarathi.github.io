// components/Navigation.js
import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Destinations</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
