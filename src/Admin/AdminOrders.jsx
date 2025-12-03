

// import React, { useEffect, useMemo, useState } from "react";
// import {
//   Search,
//   Download,
//   RefreshCw,
//   Package,
//   TrendingUp,
//   DollarSign,
//   Clock,
//   Eye,
//   Check,
//   X,
// } from "lucide-react";

// const API_BASE = "http://localhost:5007"; // Adjust if needed
// const PAGE_SIZE = 10;

// export default function AdminOrdersShopify() {
//   const [orders, setOrders] = useState([]);
//   const [originalOrders, setOriginalOrders] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("all");
//   const [page, setPage] = useState(1);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/orders`);
//       if (!res.ok) throw new Error("Network response not ok");
//       const data = await res.json();
//       const normalized = data.map((o) => ({
//         ...o,
//         items: Array.isArray(o.items) ? o.items : [],
//       }));
//       setOrders(normalized);
//       setOriginalOrders(normalized);
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);
//       setOrders([]);
//       setOriginalOrders([]);
//     } finally {
//       setLoading(false);
//       setPage(1);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const stats = useMemo(() => {
//     const totalOrders = originalOrders.length;
//     const inTransit = originalOrders.filter(
//       (o) =>
//         (o.status || "").toLowerCase() === "in transit" ||
//         (o.status || "").toLowerCase() === "in-transit"
//     ).length;
//     const totalRevenue = originalOrders.reduce(
//       (s, o) => s + (Number(o.total) || 0),
//       0
//     );
//     const avgOrder = totalOrders ? Math.round(totalRevenue / totalOrders) : 0;
//     return [
//       { title: "Total Orders", value: totalOrders, icon: Package, color: "bg-indigo-600" },
//       { title: "In Transit", value: inTransit, icon: Clock, color: "bg-yellow-500" },
//       { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, color: "bg-green-600" },
//       { title: "Avg Order", value: `$${avgOrder.toLocaleString()}`, icon: TrendingUp, color: "bg-purple-600" },
//     ];
//   }, [originalOrders]);

//   const filteredOrders = useMemo(() => {
//     let list = originalOrders;
//     if (searchTerm.trim()) {
//       const s = searchTerm.trim().toLowerCase();
//       list = list.filter(
//         (o) =>
//           (o.id && o.id.toString().toLowerCase().includes(s)) ||
//           (o.user && o.user.toLowerCase().includes(s)) ||
//           (o.email && o.email.toLowerCase().includes(s))
//       );
//     }
//     if (statusFilter !== "all") {
//       list = list.filter(
//         (o) => (o.status || "").toLowerCase() === statusFilter.toLowerCase()
//       );
//     }
//     return list;
//   }, [originalOrders, searchTerm, statusFilter]);

//   const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE));
//   useEffect(() => {
//     if (page > totalPages) setPage(totalPages);
//   }, [totalPages, page]);

//   const visibleOrders = useMemo(() => {
//     const start = (page - 1) * PAGE_SIZE;
//     return filteredOrders.slice(start, start + PAGE_SIZE);
//   }, [filteredOrders, page]);

//   const getStatusBadge = (status) => {
//     const s = (status || "").toLowerCase();
//     if (s === "in transit" || s === "in-transit") return "bg-yellow-100 text-yellow-800 border-yellow-200";
//     if (s === "delivered") return "bg-green-100 text-green-800 border-green-200";
//     if (s === "pending") return "bg-blue-100 text-blue-800 border-blue-200";
//     if (s === "cancelled") return "bg-red-100 text-red-800 border-red-200";
//     return "bg-gray-100 text-gray-800 border-gray-200";
//   };

//   const exportCSV = () => {
//     const rows = [["Order ID","User","Email","Date","Items","Total","Status"].join(",")];
//     filteredOrders.forEach((o) => {
//       rows.push([o.id,o.user,o.email,o.date||"",o.items?.length||0,o.total,o.status].join(","));
//     });
//     const blob = new Blob([rows.join("\n")], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `orders_export_${Date.now()}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   const openDetails = (o) => { setSelectedOrder(o); setShowDetails(true); };
//   const closeDetails = () => { setShowDetails(false); setSelectedOrder(null); };
//   const updateStatus = (orderId, newStatus) => { setOriginalOrders(prev => prev.map(o => o.id === orderId ? {...o,status:newStatus} : o)); };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <main className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
//             <p className="text-gray-600 mt-1 text-sm">Manage orders, update status, export and view order details.</p>
//           </div>
//           <div className="flex gap-2 items-center">
//             <button onClick={fetchOrders} className="flex items-center gap-2 px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm font-medium">
//               <RefreshCw className="w-4 h-4 text-gray-600"/> Refresh
//             </button>
//             <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm font-medium">
//               <Download className="w-4 h-4"/> Export
//             </button>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map(s => (
//             <div key={s.title} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition duration-300">
//               <div>
//                 <p className="text-sm text-gray-500">{s.title}</p>
//                 <p className="text-xl font-semibold text-gray-900 mt-1">{s.value}</p>
//               </div>
//               <div className={`${s.color} text-white rounded-lg p-3 shadow-md`}>
//                 <s.icon className="w-5 h-5"/>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Search & Filters */}
//         <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div className="flex items-center gap-2 flex-1">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"/>
//               <input 
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 placeholder="Search order ID, user, email..."
//                 className="pl-10 pr-4 py-2 rounded border w-full bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//           </div>
//           <div className="flex gap-2 items-center flex-wrap">
//             {["all","in transit","delivered","pending","cancelled"].map(s=>(
//               <button key={s} onClick={()=>{setStatusFilter(s); setPage(1);}}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${statusFilter===s ? "bg-indigo-600 text-white shadow":"bg-white border text-gray-700 hover:bg-gray-100"}`}>
//                 {s==="all"?"All":s.split(" ").map(w=>w[0].toUpperCase()+w.slice(1)).join(" ")}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Orders Table */}
//         <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
//           <table className="w-full table-auto border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 {["Order ID","Customer","Total","Items","Status","Actions"].map(h=>(
//                   <th key={h} className="px-6 py-3 text-left text-sm text-gray-600 font-medium">{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr><td colSpan={6} className="px-6 py-6 text-center text-gray-500">Loading…</td></tr>
//               ) : visibleOrders.length===0 ? (
//                 <tr><td colSpan={6} className="px-6 py-6 text-center text-gray-500">No orders found.</td></tr>
//               ) : visibleOrders.map((o,idx)=>(
//                 <tr key={o.id} className={`${idx%2===0?"bg-white":"bg-gray-50"} hover:bg-gray-100`}>
//                   <td className="px-6 py-4 font-mono text-sm text-indigo-600">#{o.id}</td>
//                   <td className="px-6 py-4">
//                     <div className="text-sm font-medium text-gray-900">{o.user||"—"}</div>
//                     <div className="text-xs text-gray-500">{o.email||"—"}</div>
//                   </td>
//                   <td className="px-6 py-4 font-semibold text-gray-900">${Number(o.total||0).toLocaleString()}</td>
//                   <td className="px-6 py-4">{o.items?.length||0}</td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-block px-3 py-1 rounded-full text-xs border ${getStatusBadge(o.status)}`}>{o.status||"—"}</span>
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <button onClick={()=>openDetails(o)} className="px-3 py-1 bg-gray-800 text-white rounded text-sm flex items-center gap-1 hover:bg-gray-700 transition">
//                       <Eye className="w-4 h-4"/>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div className="mt-4 flex items-center justify-between text-sm">
//           <div className="text-gray-600">
//             Showing {Math.min((page-1)*PAGE_SIZE+1,filteredOrders.length)} to {Math.min(page*PAGE_SIZE,filteredOrders.length)} of {filteredOrders.length} results
//           </div>
//           <div className="flex items-center gap-2">
//             <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 bg-white border rounded hover:bg-gray-100" disabled={page===1}>Prev</button>
//             <div className="px-3 py-1 bg-indigo-600 text-white rounded">{page}</div>
//             <button onClick={()=>setPage(p=>Math.min(totalPages,p+1))} className="px-3 py-1 bg-white border rounded hover:bg-gray-100" disabled={page===totalPages}>Next</button>
//           </div>
//         </div>
//       </main>

//       {/* Order Details Modal */}
//       {showDetails && selectedOrder && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden">
//             <div className="flex items-center justify-between px-6 py-4 border-b">
//               <div>
//                 <h3 className="text-lg font-semibold">Order #{selectedOrder.id}</h3>
//                 <p className="text-sm text-gray-500">{selectedOrder.user} — {selectedOrder.email}</p>
//               </div>
//               <div className="flex gap-2 items-center">
//                 <button onClick={()=>updateStatus(selectedOrder.id,"Delivered")} className="px-3 py-1 bg-green-600 text-white rounded text-sm flex items-center gap-2 hover:bg-green-700 transition">
//                   <Check className="w-4 h-4"/> Delivered
//                 </button>
//                 <button onClick={closeDetails} className="px-3 py-1 bg-white border rounded text-sm flex items-center gap-2 hover:bg-gray-100 transition">
//                   <X className="w-4 h-4"/> Close
//                 </button>
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               {selectedOrder.items.map(item=>(
//                 <div key={item.id} className="flex items-center gap-4 border rounded p-3 bg-gray-50">
//                   <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
//                   <div className="flex-1">
//                     <h4 className="font-medium text-gray-900">{item.name}</h4>
//                     <p className="text-sm text-gray-600">Qty: {item.quantity} — ${item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Download,
  RefreshCw,
  Package,
  TrendingUp,
  DollarSign,
  Clock,
  Eye,
  Check,
  X,
} from "lucide-react";

const API_BASE = "http://localhost:5007"; // Adjust if needed
const PAGE_SIZE = 10;

export default function AdminOrdersShopify() {
  const [orders, setOrders] = useState([]);
  const [originalOrders, setOriginalOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // UI state
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);

  // Modal / details
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Fetch orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/orders`);
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      const normalized = data.map((o) => ({
        ...o,
        items: Array.isArray(o.items) ? o.items : [],
      }));
      setOrders(normalized);
      setOriginalOrders(normalized);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
      setOriginalOrders([]);
    } finally {
      setLoading(false);
      setPage(1);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Stats
  const stats = useMemo(() => {
    const totalOrders = originalOrders.length;
    const inTransit = originalOrders.filter(
      (o) =>
        (o.status || "").toLowerCase() === "in transit" ||
        (o.status || "").toLowerCase() === "in-transit"
    ).length;
    const totalRevenue = originalOrders.reduce(
      (s, o) => s + (Number(o.total) || 0),
      0
    );
    const avgOrder = totalOrders ? Math.round(totalRevenue / totalOrders) : 0;
    return [
      { title: "Total Orders", value: totalOrders, icon: Package, color: "bg-indigo-600" },
      { title: "In Transit", value: inTransit, icon: Clock, color: "bg-yellow-500" },
      { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, color: "bg-green-600" },
      { title: "Avg Order", value: `$${avgOrder.toLocaleString()}`, icon: TrendingUp, color: "bg-purple-600" },
    ];
  }, [originalOrders]);

  // Filtering
  const filteredOrders = useMemo(() => {
    let list = originalOrders;
    if (searchTerm.trim()) {
      const s = searchTerm.trim().toLowerCase();
      list = list.filter(
        (o) =>
          (o.id && o.id.toString().toLowerCase().includes(s)) ||
          (o.user && o.user.toLowerCase().includes(s)) ||
          (o.email && o.email.toLowerCase().includes(s))
      );
    }
    if (statusFilter !== "all") {
      list = list.filter(
        (o) => (o.status || "").toLowerCase() === statusFilter.toLowerCase()
      );
    }
    return list;
  }, [originalOrders, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / PAGE_SIZE));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  const visibleOrders = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredOrders.slice(start, start + PAGE_SIZE);
  }, [filteredOrders, page]);

  // Status badge
  const getStatusBadge = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "in transit" || s === "in-transit") return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (s === "delivered") return "bg-green-100 text-green-800 border-green-200";
    if (s === "pending") return "bg-blue-100 text-blue-800 border-blue-200";
    if (s === "cancelled") return "bg-red-100 text-red-800 border-red-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  // Export CSV
  const exportCSV = () => {
    const rows = [["Order ID","User","Email","Date","Items","Total","Status"].join(",")];
    filteredOrders.forEach((o) => {
      rows.push([
        JSON.stringify(o.id),
        JSON.stringify(o.user),
        JSON.stringify(o.email),
        JSON.stringify(o.date || ""),
        o.items ? o.items.length : 0,
        JSON.stringify(o.total),
        JSON.stringify(o.status)
      ].join(","));
    });
    const blob = new Blob([rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orders_export_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Modal
  const openDetails = (o) => { setSelectedOrder(o); setShowDetails(true); };
  const closeDetails = () => { setShowDetails(false); setSelectedOrder(null); };

  // Update status
  const updateStatus = async (orderId, newStatus) => {
    setOriginalOrders((prev) => prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o)));
  };

  return (
    <div className="min-h-screen bg-gray-800 font-sans">
      <main className="flex-1 p-8 border">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-1000">Orders</h1>
            <p className="text-gray-600 mt-1 text-sm">Manage orders, update status, export and view order details.</p>
          </div>
          <div className="flex gap-2 items-center">
            <button onClick={fetchOrders} className="flex items-center gap-2 px-4 py-2 bg-white border rounded hover:bg-gray-100 text-sm font-medium">
              <RefreshCw className="w-4 h-4 text-gray-600" /> Refresh
            </button>
            <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm font-medium">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.title} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition">
              <div>
                <p className="text-sm text-gray-500">{s.title}</p>
                <p className="text-xl font-semibold text-gray-900 mt-1">{s.value}</p>
              </div>
              <div className={`${s.color} text-white rounded-lg p-3 shadow-md`}>
                <s.icon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search order ID, user, email..."
                className="pl-10 pr-4 py-2 rounded border w-full bg-white text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {["all", "in transit", "delivered", "pending", "cancelled"].map((s) => (
              <button
                key={s}
                onClick={() => { setStatusFilter(s); setPage(1); }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  statusFilter === s ? "bg-indigo-600 text-white shadow" : "bg-white border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {s === "all" ? "All" : s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 bg-gray-800 shadow rounded-lg overflow-hidden">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-sm text-gray-600 font-medium">Order ID</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600 font-medium">Customer</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600 font-medium">Total</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600 font-medium">Items</th>
                <th className="px-6 py-3 text-left text-sm text-gray-600 font-medium">Status</th>
                <th className="px-6 py-3 text-right text-sm text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-6 text-center text-gray-500">Loading…</td></tr>
              ) : visibleOrders.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-6 text-center text-gray-500">No orders found.</td></tr>
              ) : visibleOrders.map((o, idx) => (
                <tr key={o.id} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}>
                  <td className="px-6 py-4 font-mono text-sm text-indigo-600">#{o.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{o.user || "—"}</div>
                    <div className="text-xs text-gray-500">{o.email || "—"}</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">${Number(o.total || 0).toLocaleString()}</td>
                  <td className="px-6 py-4">{o.items ? o.items.length : 0}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs border ${getStatusBadge(o.status)}`}>
                      {o.status || "—"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => openDetails(o)} className="px-3 py-1 bg-gray-800 text-white rounded text-sm flex items-center gap-1 hover:bg-red-700 transition">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination: Prev / Next only */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {/* <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 bg-white border rounded hover:bg-gray-100"
            disabled={page === 1}
          >
            Prev
          </button> */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 bg-black border-radious text-white rounded-lg hover:bg-gray-100 items-center h-auto"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </main>

      {/* Details Modal */}
      {showDetails && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">Order #{selectedOrder.id}</h3>
                <p className="text-sm text-gray-500">{selectedOrder.user} — {selectedOrder.email}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button onClick={() => updateStatus(selectedOrder.id, "Delivered")} className="px-3 py-1 bg-green-600 text-white rounded text-sm flex items-center gap-2 hover:bg-green-700 transition">
                  <Check className="w-4 h-4" /> Delivered
                </button>
                <button onClick={closeDetails} className="px-3 py-1 bg-white border rounded text-sm flex items-center gap-2 hover:bg-gray-100 transition">
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {selectedOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border rounded p-3 bg-gray-50">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">Qty: {item.quantity} — ${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
