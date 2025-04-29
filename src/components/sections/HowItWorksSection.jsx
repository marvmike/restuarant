import React from 'react';
import { ThumbsUp, Truck, Clock } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <ThumbsUp className="text-green-500" size={24} />,
      title: "Pick Meals",
      description: "Choose from our variety of healthy, chef-prepared meals"
    },
    {
      icon: <Truck className="text-green-500" size={24} />,
      title: "Fast Deliveries",
      description: "Enjoy quick and reliable delivery to your doorstep"
    },
    {
      icon: <Clock className="text-green-500" size={24} />,
      title: "Eat Delicious",
      description: "Heat, eat and enjoy our nutritious and delicious meals"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;