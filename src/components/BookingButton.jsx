import React from 'react';

const BookingButton = () => {
  const handleBookingClick = () => {
    // Implement booking functionality here
    console.log('Booking button clicked');
  };

  return (
    <button className="booking-button" onClick={handleBookingClick}>
      Book Now
    </button>
  );
};

export default BookingButton;