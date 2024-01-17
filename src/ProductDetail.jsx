import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover object-center mb-4 rounded"
      />
      <p className="text-lg mb-1">
        Price: <span className="font-semibold">${product.price}</span>
      </p>
      <p className="text-lg">
        Quantity: <span className="font-semibold">{product.quantity}</span>
      </p>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default React.memo(ProductDetail);
