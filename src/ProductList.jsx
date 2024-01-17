import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  // State to store product data
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    // Fetch data from the first API "https://fakestoreapi.com/carts/2"

    fetch("https://fakestoreapi.com/carts/2")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.products);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-8">
      <h1 className="text-xl">Product List</h1>
      {userData.map((product) => (
        <ProductDetail key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;