import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-3 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-700">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-xl font-semibold mt-4">
            Total: ₹{total.toFixed(2)}

          </div>
          <button 
          onClick={()=> navigate("/checkout")}
          className="bg-black text-white px-4 py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
