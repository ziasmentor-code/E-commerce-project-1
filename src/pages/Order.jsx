import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { items: cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("COD");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address!");
      return;
    }
    const orderDetails = {
      items: cart,
      address,
      payment,
      total,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem("lastOrder", JSON.stringify(orderDetails));
    clearCart();
    navigate("/order-success");
  };

  if (!cart.length) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Complete Your Order</h1>

      {/* Order Summary */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">Size: {item.size}</p>
                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
              </div>
            </div>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Shipping Address</h2>
        <textarea
          className="w-full border rounded p-2"
          rows="3"
          placeholder="Enter Full Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Payment Method */}
      <div className="border p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Payment Method</h2>
        <label className="flex items-center gap-3 mb-2">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={payment === "COD"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="online"
            checked={payment === "online"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Online Payment (Not active)
        </label>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </div>
  );
}

