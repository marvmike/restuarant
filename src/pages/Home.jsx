import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to YourBrand</h1>
          <p>The premier destination for all your needs</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <div className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Premium Service</h3>
            <p>Experience the best service in the industry</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovative Solutions</h3>
            <p>Cutting-edge solutions for modern problems</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Customer Support</h3>
            <p>24/7 dedicated customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;