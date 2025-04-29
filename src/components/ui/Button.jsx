import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = "rounded-full font-medium transition duration-300";
  
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    white: "bg-white text-green-500 hover:shadow-lg",
    outline: "border border-green-500 text-green-500 hover:bg-green-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-3 text-lg"
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;