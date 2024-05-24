import React from "react";
import Header from "./Header";
import ProductsComp from "./ProductsComp";
import "../styles/layout.css";
import TotalCartItems from "./TotalCartItems";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <ProductsComp />
        {showCart && <TotalCartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
