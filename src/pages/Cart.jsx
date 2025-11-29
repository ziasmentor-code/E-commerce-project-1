


// import React, { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const { items, removeFromCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   if (!items.length)
//     return <p className="text-center mt-10 text-lg">Cart is empty!</p>;

//   // Calculate Total Price
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleOrder = () => {
//     navigate("/checkout"); // 👉 Checkout page-ലേക്ക് പോകും
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       {items.map((item) => (
//         <div
//           key={item.id + item.size}
//           className="flex justify-between items-center mb-4 p-3 border rounded-lg shadow-sm"
//         >
//           <div className="flex items-center gap-4">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-16 h-16 object-cover rounded"
//             />
//             <div>
//               <p className="font-semibold">
//                 {item.name} ({item.size})
//               </p>
//               <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//             </div>
//           </div>

//           <p className="font-semibold">₹{Number(item.price) * item.quantity}</p>

//           <button
//             onClick={() => removeFromCart(item.id, item.size)}
//             className="text-red-500 hover:underline"
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       {/* Cart Total + Order Button */}
//       <div className="mt-6 p-4 border rounded-lg shadow-sm bg-gray-50">
//         <h2 className="text-xl font-bold mb-2">Total: ₹{total}</h2>

//         <button
//           onClick={handleOrder}
//           className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
//         >
//           Order Now
//         </button>
//       </div>
//     </div>
//   );
// }


// import React, { useContext } from "react";
// import { CartContext } from "../Context/CartContext";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     if (items.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
//     // Navigate to checkout or process order
//     alert("Proceeding to checkout...");
//     // clearCart(); // Clear after successful checkout
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
//           <p className="text-gray-600 mb-6">Add some products to get started!</p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {items.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-lg shadow-sm p-6 flex gap-6 m-l-screen border pb-3 "
//               >
//                 {/* Product Image */}
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-30 h-50 object-cover rounded-lg"
//                 />

//                 {/* Product Details */}
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                     {item.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-3">
//                     {item.description?.substring(0, 80)}...
//                   </p>

//                   <div className="flex items-center justify-between">
//                     {/* Quantity Controls */}
//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => updateQuantity(item._id, item.quantity - 1)}
//                         className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
//                       >
//                         −
//                       </button>
//                       <span className="font-semibold text-gray-800 w-8 text-center">
//                         {item.quantity || 1}
//                       </span>
//                       <button
//                         onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                         className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
//                       >
//                         +
//                       </button>
//                     </div>

//                     {/* Price */}
//                     <div className="text-right">
//                       <p className="text-xl font-bold text-gray-900">
//                         ₹{(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         ₹{parseFloat(item.price).toFixed(2)} each
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 hover:text-red-700 font-medium text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-8">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-gray-600">
//                   <span>Subtotal</span>
//                   <span>₹{getCartTotal().toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <span>Shipping</span>
//                   <span className="text-green-600">Free</span>
//                 </div>
//                 <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
//                   <span>Total</span>
//                   <span>₹{getCartTotal().toFixed(2)}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handleCheckout}
//                 className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 mb-3"
//               >
//                 Proceed to Checkout
//               </button>

//               <button
//                 onClick={() => navigate("/")}
//                 className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } =
    useContext(CartContext);

  const handleCheckout = () => {
    if (items.length === 0) return; // prevent checkout if cart is empty
    navigate("/checkout"); // navigate to checkout page
  };

  if (!items.length) return <p className="text-center mt-10">Cart is empty!</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:flex-row justify-between mb-4 border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="border px-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="border px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="text-right w-full md:w-48 mt-4 md:mt-0">
              <p className="font-semibold">₹{item.price * item.quantity}</p>
              <p className="text-sm text-gray-500 mt-2">₹{item.price} each</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Order Summary */}
      <div className="mt-6 border p-4 rounded w-full md:w-1/3 ml-auto">
        <h2 className="font-semibold text-lg">Order Summary</h2>
        <div className="flex justify-between mt-2">
          <span>Subtotal</span>
          <span>₹{getCartTotal()}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>₹{getCartTotal()}</span>
        </div>
        <button
          onClick={handleCheckout} // ✅ added click handler
          className="bg-green-600 text-white mt-4 px-4 py-2 rounded w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

