import React from "react";
import "../styles/cart.css";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart-slice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };
  const decrementCartItem = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>$ {price}</p>
      <p>X{quantity}</p>
      <articel>Total ${total}</articel>
      <button onClick={decrementCartItem} className="cart-actions">
        -
      </button>
      <button onClick={incrementCartItem} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;
