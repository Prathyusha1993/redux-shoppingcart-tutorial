import React from "react";
import CartItem from "./CartItem";
import "../styles/cart.css";

const TotalCartItems = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li>
          <CartItem id={1} price={2500} name={"Macbook"} />
        </li>
      </ul>
    </div>
  );
};

export default TotalCartItems;
