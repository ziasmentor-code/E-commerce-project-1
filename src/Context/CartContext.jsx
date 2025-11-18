


// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider=({ children })=> {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(()=>{
//     const storedCart=JSON.parse(localStorage.getItem("cart"))|| [];
//     setCartItems(storedCart);
//   }, []);

//   useEffect(()=>{
//     local
//   })

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }


import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {

      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      setCartItems(updated);
    } else {

      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
