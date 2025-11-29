import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";


import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>  
        <Router>
          <Navbar />

          <Routes>
        
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />

           
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />

           
            <Route path="/checkout" element={<Checkout />} />
  

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
    
            <Route path="/success" element={<Success />}/>
            <Route path="/orders" element={<Orders />}/>
          </Routes>

        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
