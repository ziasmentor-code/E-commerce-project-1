
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// import toast from "react-hot-toast";

// export default function Checkout() {
//   const { items: cart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [shipping, setShipping] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     postalCode: "",
//   });

//   const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const handleChange = (e) => {
//     setShipping({ ...shipping, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = () => {
//     if (!cart.length) return toast.error("Cart is empty!");
//     if (!shipping.name || !shipping.email || !shipping.address || !shipping.city || !shipping.postalCode) {
//       return toast.error("Please fill all shipping details!");
//     }
//     toast.success("Order placed successfully!");
//     clearCart();
//     navigate("/success");
//   };

//   if (!cart.length) return <p className="text-center mt-10">Your cart is empty!</p>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      
//       {/* Shipping Address Form */}
//       <div className="border p-6 rounded shadow space-y-4">
//         <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
//         <input
//           type="text"
//           name="name"
//           value={shipping.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           value={shipping.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="address"
//           value={shipping.address}
//           onChange={handleChange}
//           placeholder="Address"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="city"
//           value={shipping.city}
//           onChange={handleChange}
//           placeholder="City / State"
//           className="w-full p-2 border rounded"
//         />
//         <input
//           type="text"
//           name="postalCode"
//           value={shipping.postalCode}
//           onChange={handleChange}
//           placeholder="Postal Code"
//           className="w-full p-2 border rounded"
//         />

//         <button
//           onClick={handlePlaceOrder}
//           className="bg-green-600 text-white py-3 px-6 rounded font-semibold hover:bg-green-700 w-full mt-4"
//         >
//           Place Order
//         </button>
//       </div>

//       {/* Order Summary */}
//       <div className="border p-6 rounded shadow space-y-4">
//         <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//         {cart.map((item) => (
//           <div key={item.id + item.size} className="flex justify-between mb-2">
//             <div>
//               <p className="font-medium">{item.name} ({item.size})</p>
//               <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
//             </div>
//             <p className="font-medium">₹{item.price * item.quantity}</p>
//           </div>
//         ))}
//         <hr className="my-3" />
//         <div className="flex justify-between font-bold text-lg">
//           <span>Subtotal:</span>
//           <span>₹{subtotal}</span>
//         </div>
//         <div className="flex justify-between font-bold text-lg">
//           <span>Total:</span>
//           <span>₹{subtotal}</span>
//         </div>
//       </div>

//     </div>
//   );
// }


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";

export default function Checkout() {
  const { items: cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!cart.length) return toast.error("Cart is empty!");
    if (!shipping.name || !shipping.email || !shipping.address || !shipping.city || !shipping.postalCode) {
      return toast.error("Please fill all shipping details!");
    }
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/success");
  };

  if (!cart.length) return <p className="text-center mt-10">Your cart is empty!</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      
      {/* Shipping Address Form */}
      <div className="border p-6 rounded shadow space-y-4">
        <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
        <input
          type="text"
          name="name"
          value={shipping.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={shipping.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={shipping.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="city"
          value={shipping.city}
          onChange={handleChange}
          placeholder="City / State"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="postalCode"
          value={shipping.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="w-full p-2 border rounded"
        />

        <button
          onClick={handlePlaceOrder}
          className="bg-green-600 text-white py-3 px-6 rounded font-semibold hover:bg-green-700 w-full mt-4"
        >
          Place Order
        </button>
      </div>

      {/* Order Summary */}
      <div className="border p-6 rounded shadow space-y-4">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id + item.size} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-medium">{item.name} ({item.size})</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-medium">₹{item.price * item.quantity}</p>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <span>Subtotal:</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{subtotal}</span>
        </div>
      </div>

    </div>
  );
}
