import React from "react";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useSelector } from "react-redux";

const TotalCartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalCartItems;
