import ProductList from "./ProductList";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">
        Your Shopping Cart
      </h1>
      <div className="w-full max-w-4xl">
        <ProductList />
      </div>
    </div>
  );
};

export default Cart;
