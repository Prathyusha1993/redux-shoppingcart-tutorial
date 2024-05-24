import React from "react";
import "../styles/product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";

const Product = ({ imgURL, name, price, id }) => {
  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
