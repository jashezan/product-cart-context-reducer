import React from "react";
import { Routes, Route } from "react-router-dom";

import CartProvider from "./context/CartProvider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div className="w-full flex flex-col justify-between min-h-screen">
      <CartProvider>
        <Navbar />
        <div className="w-full my-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </CartProvider>
    </div>
  );
};

export default App;
