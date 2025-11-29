
import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  if (!wishlist.length) return <p className="text-center mt-10">Your wishlist is empty!</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <p>{item.name}</p>
          </div>
          <button
            onClick={() => removeFromWishlist(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
