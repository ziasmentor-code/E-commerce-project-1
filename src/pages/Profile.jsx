
// import React, { useState } from 'react';
// import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X, ShoppingBag, Heart, Package, LogOut } from 'lucide-react';

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [userData, setUserData] = useState({
//     name: 'Aleema',
//     email: 'z123@gmail.com',
//     phone: '+91 9876543210',
//     address: '123 Main Street, Kochi, Kerala',
//     joinDate: 'January 2024'
//   });
//   const [editData, setEditData] = useState({ ...userData });

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditData({ ...userData });
//   };

//   const handleSave = () => {
//     setUserData({ ...editData });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditData({ ...userData });
//     setIsEditing(false);
//   };

//   const handleLogout = () => {
//     if (confirm('Are you sure you want to logout?')) {
//       window.location.href = '/login';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-gray-900">I-SHAAA</h1>
//           <div className="flex items-center gap-4">
//             <button className="p-2 hover:bg-gray-100 rounded-full transition">
//               <Heart className="w-6 h-6 text-gray-600" />
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-full transition">
//               <ShoppingBag className="w-6 h-6 text-gray-600" />
//             </button>
//             <button className="p-2 hover:bg-gray-100 rounded-full transition">
//               <User className="w-6 h-6 text-gray-900" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Profile Card */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               {/* Profile Header */}
//               <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
//               <div className="px-6 pb-6">
//                 <div className="flex items-end justify-between -mt-16 mb-4">
//                   <div className="flex items-end gap-4">
//                     <div className="w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-xl">
//                       <User className="w-16 h-16 text-white" />
//                     </div>
//                     <div className="mb-4">
//                       <h2 className="text-3xl font-bold text-gray-900">{userData.name}</h2>
//                       <p className="text-gray-600">Premium Member</p>
//                     </div>
//                   </div>
//                   {!isEditing ? (
//                     <button
//                       onClick={handleEdit}
//                       className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
//                     >
//                       <Edit2 className="w-4 h-4" />
//                       Edit Profile
//                     </button>
//                   ) : (
//                     <div className="mb-4 flex gap-2">
//                       <button
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
//                       >
//                         <Save className="w-4 h-4" />
//                         Save
//                       </button>
//                       <button
//                         onClick={handleCancel}
//                         className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
//                       >
//                         <X className="w-4 h-4" />
//                         Cancel
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Profile Information */}
//                 <div className="space-y-4 mt-6">
//                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
//                     <Mail className="w-5 h-5 text-blue-500" />
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600">Email Address</p>
//                       {isEditing ? (
//                         <input
//                           type="email"
//                           value={editData.email}
//                           onChange={(e) => setEditData({ ...editData, email: e.target.value })}
//                           className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         />
//                       ) : (
//                         <p className="text-gray-900 font-medium">{userData.email}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
//                     <Phone className="w-5 h-5 text-green-500" />
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600">Phone Number</p>
//                       {isEditing ? (
//                         <input
//                           type="tel"
//                           value={editData.phone}
//                           onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
//                           className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                         />
//                       ) : (
//                         <p className="text-gray-900 font-medium">{userData.phone}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
//                     <MapPin className="w-5 h-5 text-red-500" />
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600">Address</p>
//                       {isEditing ? (
//                         <textarea
//                           value={editData.address}
//                           onChange={(e) => setEditData({ ...editData, address: e.target.value })}
//                           className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                           rows="2"
//                         />
//                       ) : (
//                         <p className="text-gray-900 font-medium">{userData.address}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
//                     <Calendar className="w-5 h-5 text-purple-500" />
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-600">Member Since</p>
//                       <p className="text-gray-900 font-medium">{userData.joinDate}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Quick Stats */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <Package className="w-5 h-5 text-blue-500" />
//                     <span className="text-gray-700">Total Orders</span>
//                   </div>
//                   <span className="font-bold text-blue-600">24</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <Heart className="w-5 h-5 text-purple-500" />
//                     <span className="text-gray-700">Wishlist Items</span>
//                   </div>
//                   <span className="font-bold text-purple-600">12</span>
//                 </div>
//                 <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <ShoppingBag className="w-5 h-5 text-green-500" />
//                     <span className="text-gray-700">Cart Items</span>
//                   </div>
//                   <span className="font-bold text-green-600">3</span>
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
//               <div className="space-y-3">
//                 <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-left flex items-center gap-3">
//                   <Package className="w-5 h-5" />
//                   My Orders
//                 </button>
//                 <button className="w-full px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition text-left flex items-center gap-3">
//                   <Heart className="w-5 h-5" />
//                   Wishlist
//                 </button>
//                 <button className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-left flex items-center gap-3">
//                   <MapPin className="w-5 h-5" />
//                   Addresses
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-left flex items-center gap-3"
//                 >
//                   <LogOut className="w-5 h-5" />
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from 'react';

import {
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Save,
  X,
  ShoppingBag,
  Heart,
  Package,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Aleema',
    email: 'z123@gmail.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Kochi, Kerala',
    joinDate: 'January 2024'
  });
  const [editData, setEditData] = useState({ ...userData });
  const navigate = useNavigate();

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...userData });
  };

  const handleSave = () => {
    setUserData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      window.location.href = '/login';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">I-SHAAA</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingBag className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <UserIcon className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32"></div>
              <div className="px-6 pb-6">
                <div className="flex items-end justify-between -mt-16 mb-4">
                  <div className="flex items-end gap-4">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-xl">
                      <UserIcon className="w-16 h-16 text-white" />
                    </div>
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-gray-900">{userData.name}</h2>
                      <p className="text-gray-600">Premium Member</p>
                    </div>
                  </div>

                  {!isEditing ? (
                    <button
                      onClick={handleEdit}
                      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="mb-4 flex gap-2">
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {/* Profile Information */}
                <div className="space-y-4 mt-6">
                  
                  {/* Email */}
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Email Address</p>
                      {isEditing ? (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{userData.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Phone Number</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{userData.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Address</p>
                      {isEditing ? (
                        <textarea
                          value={editData.address}
                          onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                          className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                          rows={2}
                        />
                      ) : (
                        <p className="text-gray-900 font-medium">{userData.address}</p>
                      )}
                    </div>
                  </div>

                  {/* Join Date */}
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="text-gray-900 font-medium">{userData.joinDate}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">Total Orders</span>
                  </div>
                  <span className="font-bold text-blue-600">24</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Wishlist Items</span>
                  </div>
                  <span className="font-bold text-purple-600">12</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cart Items</span>
                  </div>
                  <span className="font-bold text-green-600">3</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                onClick={()=>navigate("/orders")} className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-3">
                  <Package className="w-5 h-5" />
                  My Orders
                </button>

                <button
                onClick={()=>navigate("/wishlist")}
                 className="w-full px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition flex items-center gap-3">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
{/* 
                <button
                onClick={()=>navigate("/addresses")}
                 className="w-full px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  Addresses
                </button> */}

                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center gap-3"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
