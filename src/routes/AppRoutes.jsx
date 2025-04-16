import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <div className="app-routes">
      {/* Routes for navigation links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* For scrollable single page view */}
      <div className="scrollable-sections">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default AppRoutes;