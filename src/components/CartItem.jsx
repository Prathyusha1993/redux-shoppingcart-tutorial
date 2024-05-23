import React from "react";
import "../styles/cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const addHandler = () => {};
  const removeHandler = () => {};
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>$ {price}</p>
      <p>X{quantity}</p>
      <articel>Total ${total}</articel>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
