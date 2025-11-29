


import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!items.length)
    return <p className="text-center mt-10 text-lg">Cart is empty!</p>;

  // Calculate Total Price
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    navigate("/checkout"); // 👉 Checkout page-ലേക്ക് പോകും
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.map((item) => (
        <div
          key={item.id + item.size}
          className="flex justify-between items-center mb-4 p-3 border rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-semibold">
                {item.name} ({item.size})
              </p>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
            </div>
          </div>

          <p className="font-semibold">₹{item.price * item.quantity}</p>

          <button
            onClick={() => removeFromCart(item.id, item.size)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Cart Total + Order Button */}
      <div className="mt-6 p-4 border rounded-lg shadow-sm bg-gray-50">
        <h2 className="text-xl font-bold mb-2">Total: ₹{total}</h2>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
