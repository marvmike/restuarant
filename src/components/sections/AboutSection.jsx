import React from 'react';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/500/400" 
                alt="Fresh vegetables" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Food Is An Important Part Of A Balanced Diet
            </h2>
            <p className="text-gray-600 mb-6">
              We believe in providing nutritious, high-quality meals that not only taste great but also contribute to your overall wellbeing. Our chefs carefully select the freshest ingredients to create balanced meals for your daily needs.
            </p>
            <Button variant="primary">
              Learn More
            </Button>
            <div className="flex items-center mt-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-500">►</span>
              </div>
              <span className="ml-4 text-gray-700 font-medium">Watch Our Story</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;