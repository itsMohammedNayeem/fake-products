import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {product.title}
      </h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover object-center mb-4 rounded"
      />
      <p className="text-lg mb-1">
        Price:{" "}
        <span className="font-semibold text-green-600">${product.price}</span>
      </p>
      <p className="text-lg">
        Quantity:{" "}
        <span className="font-semibold text-blue-600">{product.quantity}</span>
      </p>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(ProductDetail);
