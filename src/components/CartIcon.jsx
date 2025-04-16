import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
  const handleCartClick = () => {
    // Implement cart functionality here
    console.log('Cart clicked');
  };

  return (
    <div className="cart-icon" onClick={handleCartClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-count">0</span>
    </div>
  );
};

export default CartIcon;