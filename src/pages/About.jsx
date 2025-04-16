import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Learn more about our company and mission</p>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          {/* Placeholder for about image */}
          <div className="image-placeholder"></div>
        </div>
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Founded in 2010, YourBrand has been at the forefront of innovation
            and excellence in our industry. What started as a small team with a big
            vision has grown into a company trusted by thousands of customers worldwide.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide exceptional products and services that improve
            the lives of our customers. We strive for excellence in everything we do,
            from customer service to product development.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Innovation and Creativity</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>
      
      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image"></div>
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Jane Smith</h4>
            <p>Chief Operating Officer</p>
          </div>
          <div className="team-member">
            <div className="member-image"></div>
            <h4>Michael Johnson</h4>
            <p>Head of Customer Relations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;