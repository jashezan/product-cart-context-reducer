import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartSlideOver = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div
      className={`fixed w-5/6 text-black md:w-1/3 z-50 inset-y-0 right-0 bg-white shadow-lg transform transition duration-300 ease-in-out ${
        isOpen ? "translate-x-100" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-5 right-5 m-4 text-gray-700 hover:text-gray-900"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="bi bi-x-circle text-2xl"></i>
      </button>
      <div className="p-10">
        <h2>Your Cart</h2>
        <ul>
          {state.cart.length !== 0 &&
            state.cart.map((product, index) => (
              <li
                key={index}
                className="grid grid-cols-12 gap-6 justify-between items-center my-4 border shadow-lg"
              >
                <div className="col-span-4 border">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-36 h-36"
                  />
                </div>
                <div className="col-span-8">
                  <p className="text-2xl font-bold">{product.title}</p>
                  <p className="text-gray-700">{product.description}</p>
                  <p>
                    $
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </p>
                  <div>
                    <button
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <span className="sr-only">Previous</span>
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <span className=" inline-flex items-center px-2 py-2 border border-gray-300 bg-white font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                      {0}
                    </span>
                    <button
                      className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <span className="sr-only">Next</span>
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CartSlideOver;
