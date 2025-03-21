import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const ProductDetails = ({
  deepName = "Samsung",
  deepPrice = 89999,
  deepDescription = "12GB RAM with 256GB ROM",
}) => {
  // let receivedValue = useContext(UserContext)

  let { user } = useContext(UserContext);

  // console.log(user)

  return (
    <section>
      <article>
        <h1>UserName: {user.uName} </h1>
        <h1>Age: {user.age} </h1>
        <h1>Email: {user.email} </h1>
      </article>
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
