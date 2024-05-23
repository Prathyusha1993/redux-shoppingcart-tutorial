import React from "react";
import "../styles/product.css";

const Product = ({ imgURL, name, price, id }) => {
  return (
    <div className="card">
      <img src={imgURL} slt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
