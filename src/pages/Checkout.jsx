

// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// import toast from "react-hot-toast";
// import { ShoppingBag, Truck, CreditCard, Shield, ArrowLeft } from "lucide-react";

// export default function Checkout() {
//   const { items: cart, clearCart, getCartTotal } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [shipping, setShipping] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//   });

//   // Ensure subtotal is always calculated correctly
//   const subtotal = getCartTotal?.() ?? cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
//   const shippingFee = subtotal > 500 ? 0 : 40;
//   const total = subtotal + shippingFee;

//   const handleChange = (e) => {
//     setShipping({ ...shipping, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = async () => {
//     if (!cart.length) return toast.error("Cart is empty!");
//     if (!shipping.name || !shipping.email || !shipping.address || !shipping.city || !shipping.postalCode) {
//       return toast.error("Please fill all shipping details!");
//     }

//     const order = {
//       items: cart,
//       total,
//       address: `${shipping.name}, ${shipping.address}, ${shipping.city} - ${shipping.postalCode}`,
//       phone: shipping.phone,
//       payment: "Cash on Delivery",
//       date: new Date().toLocaleString(),
//       status:"In Transit",
//     };
//     try{
//       await fetch("http://localhost:5009/orders",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(order),
//       });
//       toast.success("order placed successfully!");
//       clearCart();
//       navigate("/success");
//     }catch (err){
//       console.error("Order save failed:",err);
//       Toaster.error("Failed to place Order!")
//     }
//   };

//     localStorage.setItem("lastOrder", JSON.stringify(order));
//     toast.success("Order placed successfully!");

//     // Clear cart before navigating
//     clearCart();
//     navigate("/success");
//   };

//   if (!cart.length) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-200">
//             <ShoppingBag className="w-12 h-12 text-gray-400" />
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty!</h2>
//           <p className="text-gray-600 mb-6">Add some products to checkout</p>
//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Back Button */}
//         <button
//           onClick={() => navigate("/cart")}
//           className=" border flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//           <span className="font-medium">Back to Cart</span>
//         </button>

//         {/* Header */}
//         <div className="mb-8 border-l-4 border-black pl-4">
//           <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
//           <p className="text-gray-600 mt-2">Complete your order in just a few steps</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Shipping Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:border-gray-300 transition-colors">
              
//               {/* Step 1 Header */}
//               <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
//                 <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
//                   1
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
//                   <p className="text-sm text-gray-500 mt-1">Where should we deliver your order?</p>
//                 </div>
//                 <Truck className="w-8 h-8 text-gray-400" />
//               </div>

//               <div className="space-y-6">
//                 {/* Name & Email Row */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={shipping.name}
//                       onChange={handleChange}
//                       placeholder="John Doe"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={shipping.email}
//                       onChange={handleChange}
//                       placeholder="john@example.com"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                     />
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={shipping.phone}
//                     onChange={handleChange}
//                     placeholder="+91 98765 43210"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                   />
//                 </div>

//                 {/* Address */}
//                 <div className="group">
//                   <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
//                     Street Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={shipping.address}
//                     onChange={handleChange}
//                     placeholder="123 Main Street, Apartment 4B"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                   />
//                 </div>

//                 {/* City & Postal Code */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
//                       City / State <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={shipping.city}
//                       onChange={handleChange}
//                       placeholder="Mumbai, Maharashtra"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                     />
//                   </div>
//                   <div className="group">
//                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
//                       Postal Code <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="postalCode"
//                       value={shipping.postalCode}
//                       onChange={handleChange}
//                       placeholder="400001"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-black outline-none transition-all group-hover:border-gray-400"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Method Section */}
//               <div className="mt-10 pt-8 border-t-2 border-gray-100">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
//                     2
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
//                     <p className="text-sm text-gray-500 mt-1">How would you like to pay?</p>
//                   </div>
//                   <CreditCard className="w-8 h-8 text-gray-400" />
//                 </div>
                
//                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-200 hover:border-green-300 transition-colors">
//                   <div className="flex items-center gap-4">
//                     <input
//                       type="radio"
//                       id="cod"
//                       name="payment"
//                       checked
//                       readOnly
//                       className="w-5 h-5 accent-green-600"
//                     />
//                     <div className="flex-1">
//                       <label htmlFor="cod" className="font-bold text-gray-900 text-lg cursor-pointer">
//                         Cash on Delivery (COD)
//                       </label>
//                       <p className="text-sm text-gray-600 mt-1">
//                         💵 Pay with cash when your order is delivered to your doorstep
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Order Summary - Right Side */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 sticky top-8">
              
//               {/* Header */}
//               <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
//                 <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
//                 <ShoppingBag className="w-6 h-6 text-gray-400" />
//               </div>

//               {/* Cart Items */}
//               <div className="space-y-4 max-h-72 overflow-y-auto mb-6 pr-2">
//                 {cart.map((item) => (
//                   <div key={item._id} className="flex gap-4 p-3 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors bg-gray-50">
//                     <img 
//                       src={item.image} 
//                       alt={item.name} 
//                       className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200" 
//                     />
//                     <div className="flex-1">
//                       <p className="font-bold text-gray-900 text-sm mb-1">{item.name}</p>
//                       <p className="text-xs text-gray-500 mb-2">Quantity: {item.quantity || 1}</p>
//                       <p className="text-sm font-bold text-gray-900">₹{(item.price * (item.quantity || 1)).toFixed(2)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pricing Details */}
//               <div className="space-y-4 py-5 border-t-2 border-b-2 border-gray-200">
//                 <div className="flex justify-between text-gray-600">
//                   <span className="font-medium">Subtotal</span>
//                   <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <span className="font-medium">Shipping</span>
//                   <span className={`font-bold ${shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
//                     {shippingFee === 0 ? '✓ Free' : `₹${shippingFee}`}
//                   </span>
//                 </div>
//                 {shippingFee > 0 && (
//                   <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
//                     <p className="text-xs text-yellow-800 font-medium">
//                       🎁 Add ₹{(500 - subtotal).toFixed(2)} more for free shipping!
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Total */}
//               <div className="flex justify-between items-center py-5">
//                 <span className="text-lg font-bold text-gray-900">Total Amount</span>
//                 <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                   ₹{total.toFixed(2)}
//                 </span>
//               </div>

//               {/* Place Order Button */}
//               <button
//                 onClick={handlePlaceOrder}
//                 className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//               >
//                 Place Order →
//               </button>

//               <button
//                 onClick={() => navigate("/cart")}
//                 className="w-full py-3 mt-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
//               >
//                 ← Back to Cart
//               </button>

//               {/* Security Badge */}
//               <div className="mt-6 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
//                 <div className="flex items-center justify-center gap-2 text-sm">
//                   <Shield className="w-5 h-5 text-green-600" />
//                   <span className="text-gray-600 font-medium">Secure checkout - Your data is protected</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import { ShoppingBag, Truck, CreditCard, Shield, ArrowLeft } from "lucide-react";

export default function Checkout() {
  const { items: cart, clearCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  // Ensure subtotal is always calculated correctly
  const subtotal =
    getCartTotal?.() ??
    cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const shippingFee = subtotal > 500 ? 0 : 40;
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!cart.length) return toast.error("Cart is empty!");
    if (
      !shipping.name ||
      !shipping.email ||
      !shipping.address ||
      !shipping.city ||
      !shipping.postalCode
    ) {
      return toast.error("Please fill all shipping details!");
    }

    const order = {
      items: cart,
      total,
      address: `${shipping.name}, ${shipping.address}, ${shipping.city} - ${shipping.postalCode}`,
      phone: shipping.phone,
      payment: "Cash on Delivery",
      date: new Date().toLocaleString(),
      status: "In Transit",
    };

    try {
      await fetch("http://localhost:5007/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      // Save last order locally
      localStorage.setItem("lastOrder", JSON.stringify(order));

      toast.success("Order placed successfully!");

      clearCart();
      navigate("/success");
    } catch (err) {
      console.error("Order save failed:", err);
      toast.error("Failed to place order!");
    }
  };

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-200">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty!</h2>
          <p className="text-gray-600 mb-6">Add some products to checkout</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/cart")}
          className=" border flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium text-black">Back to Cart</span>
        </button>

        {/* Header */}
        <div className="mb-8 border-l-4 border-black pl-4">
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order in just a few steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 hover:border-gray-300 transition-colors">
              {/* Step 1 Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
                  <p className="text-sm text-gray-500 mt-1">Where should we deliver your order?</p>
                </div>
                <Truck className="w-8 h-8 text-gray-400" />
              </div>

              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={shipping.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shipping.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={shipping.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* Address */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shipping.address}
                    onChange={handleChange}
                    placeholder="123 Main Street, Apartment 4B"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                  />
                </div>

                {/* City + Postal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      City / State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={shipping.city}
                      onChange={handleChange}
                      placeholder="Mumbai, Maharashtra"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={shipping.postalCode}
                      onChange={handleChange}
                      placeholder="400001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-1 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="mt-10 pt-8 border-t-2 border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
                    <p className="text-sm text-gray-500 mt-1">How would you like to pay?</p>
                  </div>
                  <CreditCard className="w-8 h-8 text-gray-400" />
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-4">
                    <input type="radio" checked readOnly className="w-5 h-5 accent-green-600" />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Cash on Delivery (COD)</p>
                      <p className="text-sm text-gray-600 mt-1">
                        💵 Pay with cash when the order arrives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 sticky top-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                <ShoppingBag className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-4 max-h-72 overflow-y-auto mb-6 pr-2">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-4 p-3 rounded-xl border-2 border-gray-100 bg-gray-50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-sm mb-1">{item.name}</p>
                      <p className="text-xs text-gray-500 mb-2">
                        Quantity: {item.quantity || 1}
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-4 py-5 border-y-2 border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span className="font-medium">Shipping</span>
                  <span className={shippingFee === 0 ? "font-bold text-green-600" : "font-bold"}>
                    {shippingFee === 0 ? "✓ Free" : `₹${shippingFee}`}
                  </span>
                </div>

                {shippingFee > 0 && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                    <p className="text-xs text-yellow-800 font-medium">
                      🎁 Add ₹{(500 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-5">
                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ₹{total.toFixed(2)}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:scale-105 transition-all"
              >
                Place Order →
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="w-full py-3 mt-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
              >
                ← Back to Cart
              </button>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 text-center">
                <Shield className="w-5 h-5 text-green-600 mx-auto" />
                <p className="text-sm text-gray-600 mt-1">Secure checkout - Your data is safe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
