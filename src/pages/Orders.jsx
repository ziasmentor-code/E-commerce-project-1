


// import React, { useEffect, useState } from "react";
// import { Package, Truck, CheckCircle, Clock, MapPin, Mail, Phone, X } from "lucide-react";

// export default function Orders() {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     // Simulated order data for demonstration
//     const sampleOrder = {
//       orderNumber: "ORD-2024-1234",
//       orderDate: "November 28, 2024",
//       estimatedDelivery: "December 2, 2024",
//       status: "In Transit",
//       email: "customer@example.com",
//       phone: "+91 98765 43210",
//       shippingAddress: {
//         name: "John Doe",
//         address: "123 MG Road",
//         city: "Chennai",
//         state: "Tamil Nadu",
//         pincode: "600001"
//       },
//       items: [
//         {
//           id: 1,
//           name: "Classic White Shirt",
//           size: "M",
//           quantity: 2,
//           price: 1299,
//           image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=200"
//         },
//         {
//           id: 2,
//           name: "Denim Jacket",
//           size: "L",
//           quantity: 1,
//           price: 2499,
//           image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200"
//         }
//       ],
//       total: 5097
//     };
    
//     const lastOrder = JSON.parse(localStorage.getItem("lastOrder")) || sampleOrder;
//     setOrder(lastOrder);
//   }, []);

//   if (!order) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Orders Found</h2>
//           <p className="text-gray-600">You haven't placed any orders yet.</p>
//         </div>
//       </div>
//     );
//   }

//   const shippingCharge = 40;
//   const gst = Math.round(order.total * 0.18);
//   const totalAmount = order.total + shippingCharge + gst;

//   const trackingSteps = [
//     {
//       title: "Order Confirmed",
//       description: "Your order has been received",
//       icon: CheckCircle,
//       status: "completed",
//       time: "Nov 28, 10:30 AM"
//     },
//     {
//       title: "Processing",
//       description: "Order is being prepared",
//       icon: Package,
//       status: "completed",
//       time: "Nov 28, 2:15 PM"
//     },
//     {
//       title: "Shipped",
//       description: "Package dispatched from warehouse",
//       icon: Truck,
//       status: "active",
//       time: "Nov 29, 9:00 AM"
//     },
//     {
//       title: "Out for Delivery",
//       description: "Delivery agent on the way",
//       icon: MapPin,
//       status: "pending",
//       time: "Expected: Dec 2"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Details</h1>
//           <div className="flex items-center gap-4 text-sm text-gray-600">
//             <span>Order #{order.orderNumber || "ORD-2024-1234"}</span>
//             <span>•</span>
//             <span>Placed on {order.orderDate || "November 28, 2024"}</span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
          
//           {/* Main Content - Left Side */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Tracking Status */}
//             <div className="bg-white border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900">Tracking Status</h2>
//                 <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium">
//                   {order.status || "In Transit"}
//                 </span>
//               </div>

//               <div className="space-y-6">
//                 {trackingSteps.map((step, index) => {
//                   const Icon = step.icon;
//                   return (
//                     <div key={index} className="flex gap-4">
//                       <div className="flex flex-col items-center">
//                         <div
//                           className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                             step.status === "completed"
//                               ? "bg-green-500 text-white"
//                               : step.status === "active"
//                               ? "bg-blue-500 text-white"
//                               : "bg-gray-200 text-gray-400"
//                           }`}
//                         >
//                           <Icon className="w-5 h-5" />
//                         </div>
//                         {index < trackingSteps.length - 1 && (
//                           <div
//                             className={`w-0.5 h-16 ${
//                               step.status === "completed" ? "bg-green-500" : "bg-gray-200"
//                             }`}
//                           ></div>
//                         )}
//                       </div>
//                       <div className="flex-1 pb-8">
//                         <p className="font-semibold text-gray-900">{step.title}</p>
//                         <p className="text-sm text-gray-600">{step.description}</p>
//                         <p className="text-xs text-gray-500 mt-1">{step.time}</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-6 p-4 bg-blue-50 border border-blue-100">
//                 <div className="flex items-start gap-3">
//                   <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
//                   <div>
//                     <p className="font-medium text-blue-900">Estimated Delivery</p>
//                     <p className="text-sm text-blue-700">{order.estimatedDelivery || "December 2, 2024"}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Items */}
//             <div className="bg-white border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h2>
              
//               <div className="space-y-4">
//                 {order.items.map((item, index) => (
//                   <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
//                     <img
//                       src={item.image?.startsWith("http") ? item.image : `https://images.unsplash.com/photo-1564859228273-274232fdb516?w=200`}
//                       alt={item.name}
//                       className="w-20 h-20 object-cover border border-gray-200"
//                     />
//                     <div className="flex-1">
//                       <p className="font-medium text-gray-900">{item.name}</p>
//                       <p className="text-sm text-gray-600">Size: {item.size}</p>
//                       <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
//                       <p className="text-sm text-gray-600">₹{item.price} each</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Sidebar - Right Side */}
//           <div className="space-y-6">
            
//             {/* Order Summary */}
//             <div className="bg-white border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
//               <div className="space-y-3 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Subtotal</span>
//                   <span className="text-gray-900">₹{order.total}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-900">₹{shippingCharge}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">GST (18%)</span>
//                   <span className="text-gray-900">₹{gst}</span>
//                 </div>
//                 <div className="border-t border-gray-200 pt-3 mt-3">
//                   <div className="flex justify-between items-center">
//                     <span className="font-semibold text-gray-900">Total</span>
//                     <span className="font-bold text-xl text-gray-900">₹{totalAmount}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Shipping Address */}
//             <div className="bg-white border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
//               <div className="text-sm text-gray-600 space-y-1">
//                 <p className="font-medium text-gray-900">{order.shippingAddress?.name || "John Doe"}</p>
//                 <p>{order.shippingAddress?.address || "123 MG Road"}</p>
//                 <p>{order.shippingAddress?.city || "Chennai"}, {order.shippingAddress?.state || "Tamil Nadu"}</p>
//                 <p>{order.shippingAddress?.pincode || "600001"}</p>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="bg-white border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 text-sm">
//                   <Mail className="w-4 h-4 text-gray-400" />
//                   <span className="text-gray-600">{order.email}</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-sm">
//                   <Phone className="w-4 h-4 text-gray-400" />
//                   <span className="text-gray-600">{order.phone || "+91 98765 43210"}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Help Section */}
//             <div className="bg-gray-50 border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
//               <p className="text-sm text-gray-600 mb-4">Contact our customer support team</p>
//               <button className="w-full py-2 px-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
//                 Contact Support
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Package, Truck, CheckCircle, Clock, MapPin, Mail, Phone, Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated order data for demonstration
    const sampleOrder = {
      orderNumber: "ORD-2024-1234",
      orderDate: "November 28, 2024",
      estimatedDelivery: "December 2, 2024",
      status: "In Transit",
      email: "customer@example.com",
      phone: "+91 98765 43210",
      shippingAddress: {
        name: "John Doe",
        address: "123 MG Road",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600001"
      },
      items: [
        {
          id: 1,
          name: "Classic White Shirt",
          size: "M",
          quantity: 2,
          price: 1299,
          image: "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=200"
        },
        {
          id: 2,
          name: "Denim Jacket",
          size: "L",
          quantity: 1,
          price: 2499,
          image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200"
        }
      ],
      total: 5097
    };
    
    const lastOrder = JSON.parse(localStorage.getItem("lastOrder")) || sampleOrder;
    setOrder(lastOrder);
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">No Orders Found</h2>
          <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  const shippingCharge = 40;
  const gst = Math.round(order.total * 0.18);
  const totalAmount = order.total + shippingCharge + gst;

  const trackingSteps = [
    {
      title: "Order Confirmed",
      description: "Your order has been received",
      icon: CheckCircle,
      status: "completed",
      time: "Nov 28, 10:30 AM"
    },
    {
      title: "Processing",
      description: "Order is being prepared",
      icon: Package,
      status: "completed",
      time: "Nov 28, 2:15 PM"
    },
    {
      title: "Shipped",
      description: "Package dispatched from warehouse",
      icon: Truck,
      status: "active",
      time: "Nov 29, 9:00 AM"
    },
    {
      title: "Out for Delivery",
      description: "Delivery agent on the way",
      icon: MapPin,
      status: "pending",
      time: "Expected: Dec 2"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Order Details</h1>
              <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
                <span className="font-semibold text-gray-900">Order #{order.orderNumber || "ORD-2024-1234"}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Placed on {order.orderDate || "November 28, 2024"}</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
              <Download className="w-4 h-4" />
              Download Invoice
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tracking Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Tracking Status</h2>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
                  {order.status || "In Transit"}
                </span>
              </div>

              <div className="space-y-8">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
                            step.status === "completed"
                              ? "bg-gradient-to-br from-green-400 to-green-600 text-white scale-110"
                              : step.status === "active"
                              ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white scale-110 animate-pulse"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div
                            className={`w-1 h-20 mt-2 rounded-full transition-all ${
                              step.status === "completed" 
                                ? "bg-gradient-to-b from-green-500 to-green-300" 
                                : "bg-gray-200"
                            }`}
                          ></div>
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <p className={`font-bold text-lg mb-1 ${
                          step.status === "active" ? "text-blue-600" : "text-gray-900"
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                        <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 text-lg">Estimated Delivery</p>
                    <p className="text-blue-700 font-semibold mt-1">{order.estimatedDelivery || "December 2, 2024"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Items</h2>
              
              <div className="space-y-5">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-5 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
                    <img
                      src={item.image?.startsWith("http") ? item.image : `https://images.unsplash.com/photo-1564859228273-274232fdb516?w=200`}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg mb-1">{item.name}</p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">Size: {item.size}</span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-gray-900">₹{item.price * item.quantity}</p>
                      <p className="text-sm text-gray-500">₹{item.price} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{order.total}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">₹{shippingCharge}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="font-semibold text-gray-900">₹{gst}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-lg">Total Amount</span>
                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
              <div className="text-sm space-y-2 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p className="font-bold text-gray-900 text-base">{order.shippingAddress?.name || "John Doe"}</p>
                <p>{order.shippingAddress?.address || "123 MG Road"}</p>
                <p>{order.shippingAddress?.city || "Chennai"}, {order.shippingAddress?.state || "Tamil Nadu"}</p>
                <p className="font-semibold text-gray-900">{order.shippingAddress?.pincode || "600001"}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{order.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{order.phone || "+91 98765 43210"}</span>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm text-gray-300 mb-5">Contact our customer support team</p>
              <button className="w-full py-3 px-4 bg-white text-gray-900 text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                Contact Support
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}