import ProductList from "./ProductList";

const Cart = () => {
  return (
    <div className="text-center items-center justify-center h-screen w-full p-8">
      <h1 className="text-2xl">Cart</h1>
      <ProductList />
    </div>
  );
};

export default Cart;
