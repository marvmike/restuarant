import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "/api/placeholder/80/80",
      quote: "I love how convenient and healthy these meals are! The delivery is always on time and the food tastes amazing. It has completely changed my eating habits.",
      name: "Sarah Johnson",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          What They Are Saying
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// src/components/sections/FaqSection.jsx
import React from 'react';
import Button from '../ui/Button';

const FaqSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Have Question In Mind?<br />Let Us Help You
        </h2>
        <Button variant="primary" size="md">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FaqSection;