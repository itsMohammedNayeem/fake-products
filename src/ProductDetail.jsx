import React from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ product }) => {
  // const [productDetail, setProductDetail] = useState({});

  // useEffect(() => {
  //   fetchProductDetails(product.productId).then((data) =>
  //     setProductDetail(data)
  //   );
  // }, [product]);

  // const fetchProductDetail = async () => {
  //   For each productId, fetch details from the second API "https://fakestoreapi.com/products/2"

  //   fetch(`https://fakestoreapi.com/products/${product.productId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProductDetail(data);
  //     })
  //     .catch((error) => console.log(error));
  // };

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
