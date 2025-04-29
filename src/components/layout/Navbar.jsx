import React from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">FOODE</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-green-100">Home</a>
          <a href="#" className="text-white hover:text-green-100">Menu</a>
          <a href="#" className="text-white hover:text-green-100">About</a>
          <a href="#" className="text-white hover:text-green-100">Contact</a>
        </div>
        <Button variant="white">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;