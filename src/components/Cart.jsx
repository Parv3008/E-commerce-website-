import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart?.map((item) => (
          <div key={item?.id} className="cart-item">
            <p>{item?.title}</p>
            <p>Qty: {item?.quantity}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: item })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', payload: item })}>-</button>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
