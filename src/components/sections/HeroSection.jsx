import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-green-500 pb-20 relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="text-green-100 mt-4 mb-8">
            Healthy and delicious meals delivered to your doorstep
          </p>
          <Button variant="white" size="lg">
            Order Now
          </Button>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto mt-8 md:mt-0 border-4 border-white shadow-xl">
            <img 
              src="/api/placeholder/400/400" 
              alt="Bowl of fresh food" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Green circles decoration */}
      <div className="absolute top-20 right-4 w-32 h-32 bg-green-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-12 left-4 w-20 h-20 bg-green-400 rounded-full opacity-70"></div>
    </section>
  );
};

export default HeroSection;