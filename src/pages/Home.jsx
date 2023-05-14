import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartProvider";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const { state, dispatch } = useContext(CartContext);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "SET_PRODUCTS",
          payloads: {
            products: data.products,
          },
        })
      );
  }, []);

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-3">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-8 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <i className="bi bi-layout-text-sidebar"></i>
        </button>
        <Sidebar />
      </div>
      <div className="col-span-8">
        <main className="container mx-auto grid gap-4 grid-col-1 md:grid-cols-3">
          {state.products.map((e, i) => (
            <ProductCard
              className="col-span-12 md:col-span-4"
              key={i}
              product={e}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
