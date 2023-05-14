import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const {state, dispatch} = useContext(CartContext)
  return <div>Cart</div>;
};

export default Cart;
