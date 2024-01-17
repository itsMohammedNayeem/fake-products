import React, { useState, useEffect } from "react";
import { fetchCartProducts, fetchProductDetails } from "./apiService";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    fetchProductList();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userData.map((product) => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProductList);
