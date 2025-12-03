import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AdminUserView() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5008/users/${id}`)
    .then((res)=>setUser(res.data))
    .catch((err)=>console.log(err));
  },[id]);
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(`http://localhost:5007/users/${id}`);
//         if (!res.ok) throw new Error("User not found");
//         const data = await res.json();
//         setUser(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchUser();
//   }, [id]);

  if (!user) {
    return (
      <div className="p-6 text-center text-white text-xl">Loading user...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white mb-6"
      >
        <ArrowLeft /> Back
      </button>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">User Details</h2>

        <div className="space-y-4 text-gray-700">
          <p>
            <strong>User ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong>{" "}
            {user.isAdmin ? (
              <span className="text-purple-600 font-semibold">Admin</span>
            ) : (
              <span className="text-blue-600 font-semibold">User</span>
            )}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {user.blocked ? (
              <span className="text-red-600 font-semibold">Blocked</span>
            ) : (
              <span className="text-green-600 font-semibold">Active</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
