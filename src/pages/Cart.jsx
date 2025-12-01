
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } =
    useContext(CartContext);

  const handleCheckout = () => {
    if (items.length === 0) return; // prevent checkout if cart is empty
    navigate("/checkout"); // navigate to checkout page
  };

  if (!items.length) return <p className="text-center mt-10">Cart is empty!</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:flex-row justify-between mb-4 border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center gap-2 mt-2">
                   <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="border px-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right w-full md:w-48 mt-4 md:mt-0">
              <p className="font-semibold">₹{item.price * item.quantity}</p>
              <p className="text-sm text-gray-500 mt-2">₹{item.price} each</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>


      <div className="mt-6 border p-4 rounded w-full md:w-1/3 ml-auto">
        <h2 className="font-semibold text-lg">Order Summary</h2>
        <div className="flex justify-between mt-2">
          <span>Subtotal</span>
          <span>₹{getCartTotal()}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{getCartTotal()}</span>
        </div>
        <button
          onClick={handleCheckout} // ✅ added click handler
          className="bg-green-600 text-white mt-4 px-4 py-2 rounded w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}


