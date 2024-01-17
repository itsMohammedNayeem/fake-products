import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  return (
    <div className="p-8">
      <h2 className="text-lg">Product Detail</h2>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(ProductDetail);
