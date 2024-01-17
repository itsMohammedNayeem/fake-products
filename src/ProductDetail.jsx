import { useEffect, useState } from "react";

const ProductDetail = ({ product }) => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    fetchProductDetail();
  }, [product]);

  const fetchProductDetail = async () => {
    // For each productId, fetch details from the second API "https://fakestoreapi.com/products/2"

    fetch(`https://fakestoreapi.com/products/${product.productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetail(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-8">
      <h2 className="text-lg">Product Detail</h2>
      <h2>{productDetail.title}</h2>
      <p>Price: {productDetail.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
};

export default ProductDetail;
