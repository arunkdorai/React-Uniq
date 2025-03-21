import React from "react";
import PropTypes from "prop-types";

const ProductDetails = ({
  deepName = "Samsung",
  deepPrice = 89999,
  deepDescription = "12GB RAM with 256GB ROM",
}) => {
  return (
    <section>
      <h3> {deepName} </h3>
      <h6> ₹{deepPrice} </h6>
      <p> {deepDescription} </p>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};
