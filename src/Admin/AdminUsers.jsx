

import React, { useEffect, useState } from "react";
import { Eye, Check, Ban, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5008/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, blocked: !u.blocked } : u
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Admin Users</h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>

                <td className="px-6 py-4">
                  {user.isAdmin ? "Admin" : "User"}
                </td>

                <td className="px-6 py-4">
                  {user.blocked ? "Blocked" : "Active"}
                </td>

                <td className="px-6 py-4 flex gap-2">
                  {/* VIEW USER */}
                  <button
                    onClick={() => navigate(`/admin/user/${user.id}`)}
                    className="px-3 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* BLOCK */}
                  <button
                    onClick={() => toggleBlock(user.id)}
                    className={`px-3 py-2 rounded-lg text-white ${
                      user.blocked ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {user.blocked ? <Check size={16} /> : <Ban size={16} />}
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-3 py-2 bg-gray-800 text-white rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
