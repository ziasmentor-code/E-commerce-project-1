


// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find(
//         (item) => item.id === product.id && item.size === product.size
//       );

//       if (exists) {
//         return prev.map((item) =>
//           item.id === product.id && item.size === product.size
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id, size) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item.id === id && item.size === size))
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => setItems((prev) => [...prev, product]);
  const removeFromCart = (id, size) =>
    setItems((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
