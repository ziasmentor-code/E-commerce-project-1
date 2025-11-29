

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Load cart items from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("cartItems");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save cart items to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  // Add to cart
  const addToCart = (product) => {
    setItems([...items, product]);
  };

  // Clear cart (after checkout)
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
