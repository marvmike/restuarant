import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'ABC Corp',
      content: 'Working with YourBrand has been an absolute pleasure. Their team is professional, responsive, and delivered beyond our expectations. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Brown',
      role: 'CEO',
      company: 'XYZ Enterprises',
      content: 'YourBrand transformed our business operations. Their innovative solutions helped us streamline processes and increase our revenue by 30% in just six months.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Small Business Owner',
      company: 'Sunrise Cafe',
      content: 'As a small business owner, I was looking for affordable yet effective solutions. YourBrand delivered exactly what I needed within my budget. Incredible service!',
      rating: 4,
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'IT Manager',
      company: 'Global Tech',
      content: 'The technical expertise of YourBrand is impressive. They quickly understood our complex requirements and implemented a solution that exceeded our expectations.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>Client Testimonials</h2>
        <p>See what our clients have to say about our services</p>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonial.content}"</p>
            </div>
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonials-cta">
        <h3>Ready to experience our exceptional service?</h3>
        <button className="cta-button">Get Started Today</button>
      </div>
    </div>
  );
};

export default Testimonials;