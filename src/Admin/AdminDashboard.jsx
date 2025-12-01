// import React from "react";

// const AdminDashboard = () => {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white shadow rounded p-6">
//           <h2 className="text-lg font-semibold">Total Users</h2>
//           <p className="text-2xl mt-2">120</p>
//         </div>
//         <div className="bg-white shadow rounded p-6">
//           <h2 className="text-lg font-semibold">Total Orders</h2>
//           <p className="text-2xl mt-2">75</p>
//         </div>
//         <div className="bg-white shadow rounded p-6">
//           <h2 className="text-lg font-semibold">Total Products</h2>
//           <p className="text-2xl mt-2">50</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, productsRes, ordersRes] = await Promise.all([
          fetch("http://localhost:5009/users"),
          fetch("http://localhost:5009/products"),
          fetch("http://localhost:5009/orders"),
        ]);
        const users = await usersRes.json();
        const products = await productsRes.json();
        const orders = await ordersRes.json();
        setStats({ users: users.length, products: products.length, orders: orders.length });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl mt-2">{stats.users}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl mt-2">{stats.orders}</p>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-2xl mt-2">{stats.products}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
