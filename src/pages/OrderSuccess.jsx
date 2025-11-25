// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function OrderSuccess() {
//   const [order, setOrder] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
//     if (lastOrder) {
//       setOrder(lastOrder);
//     } else {
//       navigate("/"); // redirect home if no order
//     }
//   }, [navigate]);

//   if (!order) return null;

//   return (
//     <div className="max-w-2xl mx-auto p-6 text-center">
//       <h1 className="text-3xl font-bold text-green-600">Order Placed Successfully</h1>

//       <div className="mt-6 p-5 border rounded-lg shadow text-left">
//         <h2 className="text-xl font-semibold mb-2">Order Details</h2>
//         <p className="text-gray-600 mb-3">Placed on: {order.date || "N/A"}</p>

//         {order.items?.length > 0 ? (
//           order.items.map((item, index) => (
//             <div key={index} className="flex justify-between mb-2">
//               <div>
//                 <p className="font-semibold">{item.name}</p>
//                 <p className="text-gray-500 text-sm">{item.description || ""}</p>
//                 <p className="text-gray-500 text-sm">{item.size || ""}</p>
//                 <p className="text-gray-500 text-sm">Qty: {item.quantity || 1}</p>
//               </div>
//               <span>₹{(item.price || 0) * (item.quantity || 1)}</span>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No items in this order</p>
//         )}

//         <hr className="my-3" />
//         <h3 className="text-lg font-semibold">Total: ₹{order.total || 0}</h3>

//         <p className="mt-4 text-gray-700">
//           Delivery to:<br />
//           {order.address || "N/A"}
//         </p>
//         <p className="text-gray-500 text-sm mt-1">
//           Payment method: {order.payment || "N/A"}
//         </p>
//       </div>

//       <button
//         onClick={() => navigate("/")}
//         className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//       >
//         Go Home
//       </button>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-6">Your order has been placed successfully.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
}
