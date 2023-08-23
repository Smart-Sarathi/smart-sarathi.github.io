// components/BlogLinks.js
import React from 'react';
import './BlogLinks.css';

function BlogLinks() {
  return (
    <section className="blog-links">
      <h2>Read Our Latest Blogs</h2>
      <div className="blog-list">
        <a href="#">10 Must-Visit Beaches</a>
        <a href="#">A Food Lover's Paradise</a>
        <a href="#">Hiking Adventures</a>
      </div>
    </section>
  );
}

export default BlogLinks;
