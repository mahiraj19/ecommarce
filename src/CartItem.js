import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      {item.name} - ${item.price} x {item.quantity}{' '}
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
