import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import CartIcon from './CartIcon';
import BookingButton from './BookingButton';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">YourBrand</Link>
      </div>
      <div className="navbar-links">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Testimonials
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Contact
        </ScrollLink>
      </div>
      <div className="navbar-actions">
        <CartIcon />
        <BookingButton />
      </div>
    </nav>
  );
};

export default Navbar;