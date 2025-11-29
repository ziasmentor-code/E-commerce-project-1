

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

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Get cart total
  const getCartTotal = () => {
    return items.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // CLEAR CART 🔥🔥 (THIS IS REQUIRED FOR PLACE ORDER)
  const clearCart = () => {
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
