

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Products", path: "/admin/products" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Users", path: "/admin/users" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove logged-in user
    navigate("/login"); // redirect to login
  };

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col p-6 justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">I-SHAA</h2>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-700 px-4 py-2 rounded font-semibold"
                  : "hover:bg-gray-700 px-4 py-2 rounded"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-8 w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
      >
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
