import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => [...prev, product]);
  };

  const clearCart = () => {
    setItems([]);
  };

  const removeFromCart = (id, size) => {
    setItems((prev) => prev.filter((item) => item.id !== id || item.size !== size));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
