


import React, { useEffect, useState } from "react";
import { Package, Truck, CheckCircle, Clock, MapPin, Mail, Phone, X } from "lucide-react";

export default function Orders() {
  const [order, setOrder] = useState(null);

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
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Orders Found</h2>
          <p className="text-gray-600">You haven't placed any orders yet.</p>
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Details</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Order #{order.orderNumber || "ORD-2024-1234"}</span>
            <span>•</span>
            <span>Placed on {order.orderDate || "November 28, 2024"}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tracking Status */}
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Tracking Status</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium">
                  {order.status || "In Transit"}
                </span>
              </div>

              <div className="space-y-6">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.status === "completed"
                              ? "bg-green-500 text-white"
                              : step.status === "active"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div
                            className={`w-0.5 h-16 ${
                              step.status === "completed" ? "bg-green-500" : "bg-gray-200"
                            }`}
                          ></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="font-semibold text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-600">{step.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{step.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-900">Estimated Delivery</p>
                    <p className="text-sm text-blue-700">{order.estimatedDelivery || "December 2, 2024"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h2>
              
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <img
                      src={item.image?.startsWith("http") ? item.image : `https://images.unsplash.com/photo-1564859228273-274232fdb516?w=200`}
                      alt={item.name}
                      className="w-20 h-20 object-cover border border-gray-200"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                      <p className="text-sm text-gray-600">₹{item.price} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            
            {/* Order Summary */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{order.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">₹{shippingCharge}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="text-gray-900">₹{gst}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-xl text-gray-900">₹{totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="font-medium text-gray-900">{order.shippingAddress?.name || "John Doe"}</p>
                <p>{order.shippingAddress?.address || "123 MG Road"}</p>
                <p>{order.shippingAddress?.city || "Chennai"}, {order.shippingAddress?.state || "Tamil Nadu"}</p>
                <p>{order.shippingAddress?.pincode || "600001"}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{order.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{order.phone || "+91 98765 43210"}</span>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-gray-50 border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Contact our customer support team</p>
              <button className="w-full py-2 px-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                Contact Support
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}