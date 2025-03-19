import React, { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product, setProduct] = useState({
    name: "iPhone16",
    price: 100000,
    description: "8GB RAM with 256GB ROM",
  });
  return (
    <div>
      <h1> Welcome to My Shop </h1>
      <ProductItem product = { product } />
    </div>
  );
};

export default Shop;
