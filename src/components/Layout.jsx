import React from "react";
import Header from "./Header";
import ProductsComp from "./ProductsComp";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <ProductsComp />
        <div className="total-price">
          <h3>total</h3>
          <button>Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
