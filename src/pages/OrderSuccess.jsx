// // import React, { useState, useEffect } from "react";
// // import { CheckCircle, Package, MapPin, CreditCard, Calendar, ShoppingBag } from "lucide-react";

// // export default function OrderSuccess() {
// //   const [showConfetti, setShowConfetti] = useState(true);
  
// //   // Sample order data (replace with actual data from localStorage)
// //   const lastOrder = {
// //     items: [
// //       {
// //         id: 1,
// //         name: "Classic White T-Shirt",
// //         size: "M",
// //         quantity: 2,
// //         price: 599,
// //         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
// //       },
// //       {
// //         id: 2,
// //         name: "Denim Jacket",
// //         size: "L",
// //         quantity: 1,
// //         price: 2499,
// //         image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop"
// //       }
// //     ],
// //     total: 3697,
// //     address: "123 Main Street, Chennai, Tamil Nadu, 600001",
// //     payment: "Credit Card (****4532)",
// //     date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
// //     orderId: "ORD" + Math.floor(Math.random() * 1000000)
// //   };

// //   useEffect(() => {
// //     const timer = setTimeout(() => setShowConfetti(false), 3000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 px-4 relative overflow-hidden">
// //       {/* Animated Background Elements */}
// //       {showConfetti && (
// //         <div className="absolute inset-0 pointer-events-none">
// //           {[...Array(20)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute animate-ping"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 50}%`,
// //                 animationDelay: `${Math.random() * 2}s`,
// //                 animationDuration: `${2 + Math.random() * 2}s`
// //               }}
// //             >
// //               <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       <div className="max-w-4xl mx-auto relative z-10">
// //         {/* Success Header */}
// //         <div className="text-center mb-8 animate-fade-in">
// //           <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4 animate-bounce">
// //             <CheckCircle className="w-12 h-12 text-green-600" />
// //           </div>
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
// //             Order Confirmed!
// //           </h1>
// //           <p className="text-gray-600 text-lg">
// //             Thank you for shopping with us
// //           </p>
// //           <p className="text-sm text-gray-500 mt-2">
// //             Order ID: <span className="font-semibold text-gray-700">{lastOrder.orderId}</span>
// //           </p>
// //         </div>

// //         {/* Main Content Card */}
// //         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
// //           {/* Order Items */}
// //           <div className="p-6 md:p-8">
// //             <div className="flex items-center gap-2 mb-6">
// //               <ShoppingBag className="w-6 h-6 text-blue-600" />
// //               <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
// //             </div>

// //             <div className="space-y-4 mb-6">
// //               {lastOrder.items.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
// //                 >
// //                   <img
// //                     src={item.image}
// //                     alt={item.name}
// //                     className="w-20 h-20 object-cover rounded-lg shadow-md"
// //                   />
// //                   <div className="flex-1">
// //                     <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
// //                     <div className="flex gap-4 text-sm text-gray-600">
// //                       <span>Size: <span className="font-medium">{item.size}</span></span>
// //                       <span>Qty: <span className="font-medium">{item.quantity}</span></span>
// //                     </div>
// //                   </div>
// //                   <div className="text-right">
// //                     <p className="font-semibold text-gray-800">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
// //                     <p className="text-sm text-gray-500">₹{item.price.toLocaleString('en-IN')} each</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Total */}
// //             <div className="border-t border-gray-200 pt-4">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-lg font-semibold text-gray-700">Total Amount</span>
// //                 <span className="text-2xl font-bold text-green-600">₹{lastOrder.total.toLocaleString('en-IN')}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Order Details */}
// //           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 border-t border-gray-200">
// //             <h3 className="text-xl font-bold text-gray-800 mb-4">Order Details</h3>
            
// //             <div className="space-y-4">
// //               <div className="flex gap-3">
// //                 <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
// //                 <div>
// //                   <p className="font-semibold text-gray-700 mb-1">Shipping Address</p>
// //                   <p className="text-gray-600">{lastOrder.address}</p>
// //                 </div>
// //               </div>

// //               <div className="flex gap-3">
// //                 <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
// //                 <div>
// //                   <p className="font-semibold text-gray-700 mb-1">Payment Method</p>
// //                   <p className="text-gray-600">{lastOrder.payment}</p>
// //                 </div>
// //               </div>

// //               <div className="flex gap-3">
// //                 <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
// //                 <div>
// //                   <p className="font-semibold text-gray-700 mb-1">Order Date</p>
// //                   <p className="text-gray-600">{lastOrder.date}</p>
// //                 </div>
// //               </div>

// //               <div className="flex gap-3">
// //                 <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
// //                 <div>
// //                   <p className="font-semibold text-gray-700 mb-1">Estimated Delivery</p>
// //                   <p className="text-gray-600">3-5 Business Days</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="p-6 md:p-8 bg-white border-t border-gray-200">
// //             <div className="flex flex-col sm:flex-row gap-4">
// //               <button
// //                 onClick={() => window.location.href = "/"}
// //                 className="flex-1 py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
// //               >
// //                 Continue Shopping
// //               </button>
// //               <button
// //                 onClick={() => window.location.href = "/orders"}
// //                 className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-200 transition-all border border-gray-300"
// //               >
// //                 View All Orders
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Info Card */}
// //         <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
// //           <p className="text-blue-800 text-sm">
// //             📧 A confirmation email has been sent to your registered email address
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";
// import { CheckCircle, Package, Truck, ArrowLeft, ExternalLink } from "lucide-react";

// export default function OrderSuccess() {
//   // Replace this with actual order from localStorage or state
//   const lastOrder = (() => {
//     try {
//       return JSON.parse(localStorage.getItem("lastOrder")) || null;
//     } catch {
//       return null;
//     }
//   })();

//   const defaultOrder = {
//     items: [
//       {
//         id: 1,
//         name: "Premium Cotton T-Shirt",
//         size: "M",
//         quantity: 2,
//         price: 799,
//         image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
//       },
//       {
//         id: 2,
//         name: "Classic Denim Jeans",
//         size: "32",
//         quantity: 1,
//         price: 2499,
//         image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop"
//       }
//     ],
//     total: 4097,
//     address: "123 MG Road, Bangalore, Karnataka 560001",
//     payment: "Digital Payment",
//     date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
//     orderId: "ORD" + Math.floor(100000 + Math.random() * 900000),
//     email: "customer@example.com",
//     phone: "+91 98765 43210"
//   };

//   const order = lastOrder || defaultOrder;

//   const estimatedDelivery = new Date();
//   estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
//   const deliveryDate = estimatedDelivery.toLocaleDateString('en-IN', { 
//     weekday: 'short', 
//     day: 'numeric', 
//     month: 'short' 
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-6xl">
//         <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
          
//           {/* Left Side - Order Details */}
//           <div className="bg-white p-8 lg:p-12">
//             <button
//               onClick={() => window.location.href = "/"}
//               className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               <span className="text-sm font-medium">Back to Home</span>
//             </button>

//             <div className="mb-8">
//               <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//                 Order Total: ₹{order.total.toLocaleString('en-IN')}
//               </div>
//             </div>

//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

//             {/* Order Items */}
//             <div className="space-y-4 mb-8">
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded-md"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
//                     <div className="flex gap-3 text-sm text-gray-600">
//                       <span>Size: {item.size}</span>
//                       <span>Qty: {item.quantity}</span>
//                     </div>
//                     <p className="text-sm font-semibold text-gray-900 mt-2">
//                       ₹{(item.price * item.quantity).toLocaleString('en-IN')}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Customer Information */}
//             <div className="space-y-4 pb-6 border-b border-gray-200">
//               <h3 className="font-semibold text-gray-900 mb-3">Customer Information</h3>
              
//               <div>
//                 <label className="text-xs text-gray-500 uppercase tracking-wide">Email Address</label>
//                 <p className="text-gray-900 font-medium">{order.email}</p>
//               </div>

//               <div>
//                 <label className="text-xs text-gray-500 uppercase tracking-wide">Phone Number</label>
//                 <p className="text-gray-900 font-medium">{order.phone}</p>
//               </div>

//               <div>
//                 <label className="text-xs text-gray-500 uppercase tracking-wide">Shipping Address</label>
//                 <p className="text-gray-900 font-medium">{order.address}</p>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="pt-6">
//               <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
//                   <span className="text-white text-xs font-bold">CARD</span>
//                 </div>
//                 <span className="text-gray-900 font-medium">{order.payment}</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Success Confirmation */}
//           <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 lg:p-12 flex flex-col items-center justify-center text-white relative overflow-hidden">
            
//             {/* Decorative circles */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>

//             <div className="relative z-10 text-center">
//               {/* Success Icon */}
//               <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg animate-bounce">
//                 <CheckCircle className="w-16 h-16 text-green-500" />
//               </div>

//               <h1 className="text-4xl font-bold mb-3">Order Confirmed!</h1>
              
//               <p className="text-green-100 mb-2">
//                 Your order has been placed successfully.
//               </p>
              
//               <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg mb-8">
//                 <p className="text-sm text-white">
//                   Order ID: <span className="font-bold">{order.orderId}</span>
//                 </p>
//               </div>

//               {/* Delivery Info */}
//               <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8 text-black">
//                 <div className="flex items-center justify-center gap-2 mb-3">
//                   <Truck className="w-5 h-5" />
//                   <h3 className="font-semibold">Est. Delivery</h3>
//                 </div>
//                 <p className="text-2xl font-bold">{deliveryDate}</p>
//                 <button className="mt-3 text-sm text-white hover:text-green-100 underline flex items-center gap-1 mx-auto transition-colors">
//                   Track My Order
//                   <ExternalLink className="w-3 h-3" />
//                 </button>
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-3 w-full max-w-sm mx-auto">
//                 <button
//                   onClick={() => window.location.href = "/"}
//                   className="w-full py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
//                 >
//                   Continue Shopping
//                 </button>
                
//                 <button
//                   onClick={() => window.location.href = "/orders"}
//                   className="w-full py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-opacity-30 transition-all border-2 border-white border-opacity-30"
//                 >
//                   View Order History
//                 </button>
//               </div>

//               {/* Support Link */}
//               <div className="mt-8 pt-6 border-t border-white border-opacity-20">
//                 <p className="text-sm text-green-100">
//                   Have any questions? 
//                   <button className="ml-1 font-semibold text-white hover:underline">
//                     Customer Support
//                   </button>
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { CheckCircle, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  const lastOrder = JSON.parse(localStorage.getItem("lastOrder")) || null;

  if (!lastOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>No recent orders found.</p>
      </div>
    );
  }

  // Estimated delivery & tracking
  const trackingId = lastOrder.trackingId || "TRK" + Math.floor(100000000 + Math.random() * 900000000);
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
  const deliveryDate = estimatedDelivery.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });

  // Delivery status simulation (0-3)
  const [status, setStatus] = useState(1); // 1 = Order Confirmed, 2 = Shipped, 3 = Out for Delivery, 4 = Delivered

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev < 4 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = ["Order Confirmed", "Shipped", "Out for Delivery", "Delivered"];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg overflow-hidden">

        {/* Header */}
        <div className="text-center p-6 border-b">
          <CheckCircle className="mx-auto w-16 h-16 text-green-500 mb-2" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-1">Thank you for shopping with us.</p>
          <p className="text-gray-500 text-sm">
            Order ID: <span className="font-semibold">{lastOrder.orderId}</span>
          </p>
        </div>

        {/* Order Summary */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {lastOrder.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                  <p className="text-sm text-gray-500">₹{item.price} each</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>₹{lastOrder.total}</span>
          </div>
        </div>

        {/* Shipping & Payment */}
        <div className="p-6 border-b space-y-4">
          <h2 className="text-2xl font-semibold">Shipping & Payment</h2>
          <p><strong>Shipping Address:</strong> {lastOrder.address}</p>
          <p><strong>Email:</strong> {lastOrder.email}</p>
          <p><strong>Phone:</strong> {lastOrder.phone}</p>
          <p><strong>Payment Method:</strong> {lastOrder.payment}</p>
          <p><strong>Tracking ID:</strong> {trackingId}</p>
          <p><strong>Estimated Delivery:</strong> {deliveryDate}</p>
        </div>

        {/* Delivery Tracking Timeline */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold mb-4">Delivery Status</h2>
          <div className="flex justify-between items-center">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center relative">
                <div className={`w-6 h-6 rounded-full ${status > idx ? "bg-green-500" : "bg-gray-300"} z-10`} />
                {idx < steps.length - 1 && <div className={`absolute top-2 left-1/2 w-full h-1 -translate-x-1/2 ${status > idx ? "bg-green-500" : "bg-gray-300"} z-0`} />}
                <span className="text-xs mt-2 text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate("/")} className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Continue Shopping</button>
          <button onClick={() => navigate("/orders")} className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">View All Orders</button>
          <button onClick={() => alert("Redirect to shipment tracking page")} className="flex-1 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">Track My Order</button>
        </div>
      </div>
    </div>
  );
}

