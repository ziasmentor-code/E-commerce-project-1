


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) setOrder(JSON.parse(lastOrder));
    else navigate("/"); // redirect if no order
  }, [navigate]);

  if (!order) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Order Successful! 🎉</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Your order has been placed successfully.</p>
      </div>

      <button onClick={() => navigate("/")} className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 mb-2">Continue Shopping</button>
      <button onClick={() => navigate("/orders")} className="bg-gray-100 border text-black px-6 py-3 rounded-md hover:bg-gray-200">View Orders</button>
    </div>
  );
}
