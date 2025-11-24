import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item._id)}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => increaseQty(item._id)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 font-semibold"
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-6 text-xl font-bold">
          Total: ₹{total}
        </div>
      )}
    </div>
  );
}
