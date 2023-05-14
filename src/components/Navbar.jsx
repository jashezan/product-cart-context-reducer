import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import CartSlideOver from "./CartSlideOver";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };
  return (
    <nav className="bg-indigo-950 text-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Cartress
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <i className="bi bi-cart pr-2"></i>
            Cart
            <span>
              {state.cart.length !== 0 ? (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {state.cart.length}
                </div>
              ) : (
                ""
              )}
            </span>
          </button>
          <CartSlideOver isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <form
            className="relative mt-3 md:mt-auto md:block"
            onSubmit={handleSubmit}
          >
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="bi bi-search text-gray-400"></i>
            </div>
            <input
              type="search"
              id="search-navbar"
              className="block w-full py-2 px-20 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
