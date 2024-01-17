import React, { useState, useEffect } from "react";
import { fetchCartProducts, fetchProductDetails } from "./apiService";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  // State to store product data
  const [userData, setUserData] = useState([]);

  //   useEffect(() => {
  //     fetchCartProducts().then((data) => setUserData(data.products));
  //   }, []);

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

  //   const fetchProductList = async () => {
  //     Fetch data from the first API "https://fakestoreapi.com/carts/2"

  //     fetch("https://fakestoreapi.com/carts/2")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUserData(data.products);
  //       })
  //       .catch((error) => console.log(error));
  //   };

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
