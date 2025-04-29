import React from 'react';

const TestimonialCard = ({ image, quote, name, rating = 5 }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg text-center">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-gray-700 italic mb-4">
        "{quote}"
      </p>
      <div className="flex items-center justify-center mb-2">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <h4 className="font-medium text-gray-900">{name}</h4>
    </div>
  );
};

export default TestimonialCard;