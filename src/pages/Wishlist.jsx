


import React, { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!wishlist.length) {
  return (
    <div className="flex flex-col items-center justify-center py-28 text-center">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20 text-gray-400 mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.75c-2.071-3.5-7.5-3.214-7.5 1.5 0 3.75 7.5 9 7.5 9s7.5-5.25 7.5-9c0-4.714-5.429-5-7.5-1.5z"
        />
      </svg>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Your wishlist is empty
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-1 mb-6">
        Start saving items to your wishlist!
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/products")}
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black-700 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
}


  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {/* Product Image */}
            <div onClick={() => navigate(`/product/${item.id}`)}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover rounded-t-xl"
              />
            </div>

            {/* Product Content */}
            <div className="p-4">
              <p
                onClick={() => navigate(`/product/${item.id}`)}
                className="font-medium text-sm hover:underline"
              >
                {item.name}
              </p>

              <p className="text-gray-700 mt-1 font-semibold">₹{item.price}</p>

              {/* Buttons */}
              <div className="mt-3 space-y-2">

                {/* Move to Cart Button */}
                <button
                  onClick={() => {
                    addToCart(item);
                    navigate("/cart"); // Redirect to cart after adding
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-black text-white px-3 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  <FaShoppingCart /> Move to Cart
                </button>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="w-full flex items-center justify-center gap-2 border border-gray-400 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition text-sm font-medium"
                >
                  <FaTrash /> Remove
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
