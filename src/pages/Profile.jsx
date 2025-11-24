import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return (
      <div className="text-center py-10 text-gray-500">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-10">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePic || "https://via.placeholder.com/100"}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Orders</h3>
        <p className="text-gray-500">You have no orders yet.</p>
      </div>
    </div>
  );
}
