import { useEffect, useState } from "react";

const Cart = () => {
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <h1>Cart</h1>
      <p>{userData}</p>
    </div>
  );
};

export default Cart;
