

// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   ComposedChart,
//   Line,
//   CartesianGrid,
//   Legend
// } from "recharts";

// const COLORS = ["#3b82f6", "#8b5cf6", "#10b981"];

// export default function AdminDashboard() {
//   const [stats, setStats] = useState({
//     users: 0,
//     products: 0,
//     orders: 0,
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [usersRes, productsRes, ordersRes] = await Promise.all([
//           fetch("http://localhost:5007/users"),
//           fetch("http://localhost:5007/products"),
//           fetch("http://localhost:5007/orders"),
//         ]);

//         const users = await usersRes.json();
//         const products = await productsRes.json();
//         const orders = await ordersRes.json();

//         setStats({
//           users: users.length,
//           products: products.length,
//           orders: orders.length,
//         });
//       } catch (err) {
//         console.error("Error loading dashboard:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   const barData = [
//     { name: "Users", value: stats.users },
//     { name: "Products", value: stats.products },
//     { name: "Orders", value: stats.orders },
//   ];

//   const pieData = [
//     { name: "Users", value: stats.users },
//     { name: "Products", value: stats.products },
//     { name: "Orders", value: stats.orders },
//   ];

//   // Excel-style Combo Chart Data
//   const excelChartData = [
//     { name: "Users", value: stats.users },
//     { name: "Products", value: stats.products },
//     { name: "Orders", value: stats.orders },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto space-y-8">
        
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
//             <p className="text-gray-600 mt-1">Welcome back, Admin</p>
//           </div>
//           <div className="text-sm text-gray-500">
//             Last updated: {new Date().toLocaleDateString()}
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex items-center justify-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           </div>
//         ) : (
//           <>
//             {/* Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
//               {/* Users Card */}
//               <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
//                       Total Users
//                     </h2>
//                     <p className="text-4xl font-bold mt-2 text-gray-900">{stats.users}</p>
//                   </div>
//                   <div className="bg-blue-100 p-3 rounded-lg">
//                     <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                         d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Products Card */}
//               <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
//                       Total Products
//                     </h2>
//                     <p className="text-4xl font-bold mt-2 text-gray-900">{stats.products}</p>
//                   </div>
//                   <div className="bg-purple-100 p-3 rounded-lg">
//                     <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                         d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>

//               {/* Orders Card */}
//               <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
//                       Total Orders
//                     </h2>
//                     <p className="text-4xl font-bold mt-2 text-gray-900">{stats.orders}</p>
//                   </div>
//                   <div className="bg-green-100 p-3 rounded-lg">
//                     <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
//                         d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Charts */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
//                 <h2 className="text-xl font-semibold mb-6 text-gray-800">
//                   Excel-Style Performance Chart
//                 </h2>

//                 <ResponsiveContainer width="250%" height={400}>
//                   <ComposedChart data={excelChartData}>
//                     <CartesianGrid stroke="#e5e7eb" />
//                     <XAxis dataKey="name" stroke="#6b7280" />
//                     <YAxis stroke="#6b7280" />
//                     <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }} />
//                     <Legend />

//                     {/* Blue Bars */}
//                     <Bar dataKey="value" barSize={40} fill="#3b82f6" radius={[6, 6, 0, 0]} />

//                     {/* Yellow Line */}
//                     <Line
//                       type="monotone"
//                       dataKey="value"
//                       stroke="#fbbf24"
//                       strokeWidth={3}
//                       dot={{ r: 5, stroke: "#fbbf24", strokeWidth: 2, fill: "#fff" }}
//                     />
//                   </ComposedChart>
//                 </ResponsiveContainer>
//               </div>
//               </div>
            
//              {/* <div>
//               {/* Bar Chart */}
//               {/* <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
//                 <h2 className="text-xl font-semibold mb-6 text-gray-800">Analytics Overview</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={barData}>
//                     <XAxis dataKey="name" stroke="#6b7280" />
//                     <YAxis stroke="#6b7280" />
//                     <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }} />
//                     <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//               </div> */}
             
//               <div>
//               {/* Pie Chart */}
//               <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
//                 <h2 className="text-xl font-semibold mb-6 text-gray-800">Distribution</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={pieData}
//                       dataKey="value"
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={100}
//                       label={(entry) => `${entry.name}: ${entry.value}`}
//                       labelLine={false}
//                     >
//                       {pieData.map((entry, index) => (
//                         <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #e5e7eb" }} />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Excel-Style Combo Chart */}
              

//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#8b5cf6", "#10b981"];

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, productsRes, ordersRes] = await Promise.all([
          fetch("http://localhost:5007/users"),
          fetch("http://localhost:5007/products"),
          fetch("http://localhost:5007/orders"),
        ]);

        const users = await usersRes.json();
        const products = await productsRes.json();
        const orders = await ordersRes.json();

        setStats({
          users: users.length,
          products: products.length,
          orders: orders.length,
        });
      } catch (err) {
        console.error("Error loading dashboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const barData = [
    { name: "Users", value: stats.users },
    { name: "Products", value: stats.products },
    { name: "Orders", value: stats.orders },
  ];

  const pieData = [
    { name: "Users", value: stats.users },
    { name: "Products", value: stats.products },
    { name: "Orders", value: stats.orders },
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-2 text-lg font-medium">Welcome back, Admin</p>
          </div>
          <div className="text-sm text-gray-400 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 bg-indigo-100 rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900">
              {/* Users Card */}
              <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Users</h3>
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-5xl font-bold text-gray-800">{stats.users}</p>
                  <p className="text-sm text-indigo-600 mt-2 font-medium">↑ Active users</p>
                </div>
              </div>

              {/* Products Card */}
              <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Products</h3>
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-5xl font-bold text-gray-800">{stats.products}</p>
                  <p className="text-sm text-purple-600 mt-2 font-medium">↑ In inventory</p>
                </div>
              </div>

              {/* Orders Card */}
              <div className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Total Orders</h3>
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-5xl font-bold text-gray-800">{stats.orders}</p>
                  <p className="text-sm text-emerald-600 mt-2 font-medium">↑ Completed</p>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bar Chart */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
                  <p className="text-sm text-gray-500 mt-1">Current statistics breakdown</p>
                </div>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={barData}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#9ca3af"
                      style={{ fontSize: '14px', fontWeight: '600' }}
                    />
                    <YAxis 
                      stroke="#9ca3af"
                      style={{ fontSize: '14px', fontWeight: '600' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        fontWeight: '600'
                      }} 
                    />
                    <Bar dataKey="value" fill="#6366f1" radius={[12, 12, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Distribution</h2>
                  <p className="text-sm text-gray-500 mt-1">Data distribution overview</p>
                </div>
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={110}
                      label={(entry) => `${entry.name}: ${entry.value}`}
                      labelLine={false}
                      style={{ fontSize: '14px', fontWeight: '600' }}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        fontWeight: '600'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}