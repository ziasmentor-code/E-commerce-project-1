

// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const saved = localStorage.getItem("cartItems");
//     if (saved) setItems(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//   }, [items]);

//   const addToCart = (product) => {
//     const exist = items.find((item) => item.id === product.id);
//     if (exist) {
//       setItems(
//         items.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setItems([...items, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   // New functions for increment/decrement
//   const increaseQuantity = (id) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (id) => {
//     setItems(
//       items.map((item) =>
//         item.id === id
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };

//   const getCartTotal = () => {
//     return items.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         setItems,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         getCartTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


// // CartContext.jsx
// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [items, setItems] = useState([]);

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem("cartItems");
//     if (saved) setItems(JSON.parse(saved));
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//   }, [items]);

//   // Add item to cart
//   const addToCart = (product) => {
//     setItems((prev) => {
//       const exist = prev.find((p) => p._id === product._id);
//       if (exist) {
//         return prev.map((p) =>
//           p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Remove item
//   const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p._id !== id));

//   // Clear cart
//   const clearCart = () => setItems([]);

//   // Get total
//   const getCartTotal = () =>
//     items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

//   return (
//     <CartContext.Provider
//       value={{ items, addToCart, removeFromCart, clearCart, getCartTotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const API = "http://localhost:5009/cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // 1️⃣ Load cart from backend
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading cart:", err));
  }, []);

  // 2️⃣ Add to cart
  const addToCart = async (product) => {
    const exists = items.find((item) => item.id === product.id);

    if (exists) {
      increaseQuantity(product.id);
      return;
    }

    const newItem = { ...product, quantity: 1 };

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });

    setItems((prev) => [...prev, newItem]);
  };

  // 3️⃣ Increase quantity
  const increaseQuantity = async (id) => {
    const item = items.find((i) => i.id === id);

    const updatedItem = { ...item, quantity: item.quantity + 1 };

    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: updatedItem.quantity }),
    });

    setItems((prev) =>
      prev.map((i) => (i.id === id ? updatedItem : i))
    );
  };

  // 4️⃣ Decrease quantity
  const decreaseQuantity = async (id) => {
    const item = items.find((i) => i.id === id);

    if (!item || item.quantity <= 1) return;

    const updatedItem = { ...item, quantity: item.quantity - 1 };

    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: updatedItem.quantity }),
    });

    setItems((prev) =>
      prev.map((i) => (i.id === id ? updatedItem : i))
    );
  };

  // 5️⃣ Remove from cart
  const removeFromCart = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });

    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 6️⃣ Cart total
  const getCartTotal = () => {
    return items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // 7️⃣ Clear cart after order
  const clearCart = async () => {
    for (let item of items) {
      await fetch(`${API}/${item.id}`, { method: "DELETE" });
    }
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
