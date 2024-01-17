import React, { useState, useEffect } from "react";
import { fetchCartProducts, fetchProductDetails } from "./apiService";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const cartData = await fetchCartProducts();
        const productDetails = await Promise.all(
          cartData.products.map((p) => fetchProductDetails(p.productId))
        );
        const combinedData = cartData.products.map((product, index) => ({
          ...product,
          ...productDetails[index],
        }));
        setUserData(combinedData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-xl">Product List</h1>
      {userData.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default React.memo(ProductList);
