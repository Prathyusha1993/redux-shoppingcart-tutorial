import React from "react";

const CartItem = () => {
  const addHandler = () => {};
  const removeHandler = () => {};
  return (
    <div className="cartItem">
      <h2>name</h2>
      <p>price</p>
      <p>quantity</p>
      <articel>total</articel>
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
