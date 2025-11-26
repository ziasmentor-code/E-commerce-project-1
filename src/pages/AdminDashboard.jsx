// src/pages/AdminDashboard.jsx
import React from "react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl">Total Users</h3>
          <p className="text-4xl mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl">Total Products</h3>
          <p className="text-4xl mt-2">58</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl">Total Orders</h3>
          <p className="text-4xl mt-2">32</p>
        </div>

      </div>
    </div>
  );
}
