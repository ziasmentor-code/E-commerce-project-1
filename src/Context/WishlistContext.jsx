

// import React, { createContext, useState, useEffect } from "react";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const isInWishlist = (id) => wishlist.some(item => item.id === id);
//   const addToWishlist = (product) => !isInWishlist(product.id) && setWishlist(prev => [...prev, product]);
//   const removeFromWishlist = (id) => setWishlist(prev => prev.filter(item => item.id !== id));

//   return <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>{children}</WishlistContext.Provider>;
// };
import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => setWishlist((prev) => [...prev, product]);
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((p) => p.id !== id));

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
