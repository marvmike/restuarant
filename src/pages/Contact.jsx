import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Get in touch with our team</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-detail">
            <span className="contact-icon">📱</span>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">✉️</span>
            <p>info@yourbrand.com</p>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">🏢</span>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">⏰</span>
            <p>Monday - Friday: 9am - 5pm</p>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="contact-map">
        <h3>Our Location</h3>
        <div className="map-container">
          {/* Placeholder for map */}
          <div className="map-placeholder">Map will be displayed here</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;