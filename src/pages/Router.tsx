import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Login from "./Login/Login";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
