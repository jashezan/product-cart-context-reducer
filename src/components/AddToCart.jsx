import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const AddToCart = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const addToCart = (addedProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payloads: {
        product: addedProduct,
      },
    });
  };
  return (
    <button
      onClick={() => {
        addToCart(product);
      }}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center"
    >
      <i className="bi bi-cart-plus pr-2"></i>
      Add to cart
    </button>
  );
};

export default AddToCart;
