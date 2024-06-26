import React from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../store/cart-slice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
