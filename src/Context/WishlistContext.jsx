// import React, { createContext, useState, useEffect } from "react";

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState(() => {
//     const saved = localStorage.getItem("wishlist");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const isInWishlist = (id) => wishlist.some((item) => item.id === id);

//   const addToWishlist = (product) => {
//     if (!isInWishlist(product.id)) setWishlist((prev) => [...prev, product]);
//   };

//   const removeFromWishlist = (id) => {
//     setWishlist((prev) => prev.filter((item) => item.id !== id));
//   };

//   const toggleWishlist = (product) => {
//     if (isInWishlist(product.id)) removeFromWishlist(product.id);
//     else addToWishlist(product);
//   };

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const isInWishlist = (id) => wishlist.some(item => item.id === id);
  const addToWishlist = (product) => !isInWishlist(product.id) && setWishlist(prev => [...prev, product]);
  const removeFromWishlist = (id) => setWishlist(prev => prev.filter(item => item.id !== id));

  return <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>{children}</WishlistContext.Provider>;
};
