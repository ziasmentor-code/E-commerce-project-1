import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/Ordersuccess";



export default function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<OrderSuccess />}/>
 

          </Routes>

          <Footer />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}
