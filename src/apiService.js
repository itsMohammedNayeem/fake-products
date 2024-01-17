const BASE_URL = "https://fakestoreapi.com";

export const fetchCartProducts = async () => {
  const response = await fetch(`${BASE_URL}/carts/2`);
  if (!response.ok) throw new Error("Failed to fetch cart products");
  return response.json();
};

export const fetchProductDetails = async (productId) => {
  const response = await fetch(`${BASE_URL}/products/${productId}`);
  if (!response.ok) throw new Error(`Failed to fetch product ${productId}`);
  return response.json();
};
