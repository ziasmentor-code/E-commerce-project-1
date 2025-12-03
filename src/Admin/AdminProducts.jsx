

// import React, { useState, useEffect } from "react";

// const AdminProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(10);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5007/products");
//         if (!res.ok) throw new Error("Failed to fetch products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // DELETE PRODUCT
//   const deleteProduct = (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     setProducts(products.filter((p) => p.id !== id));
//   };

//   // EDIT PRODUCT (alert only)
//   const editProduct = (product) => {
//     alert(`Edit clicked for ${product.name}`);
//   };

//   const filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   if (loading) return <p className="text-gray-500">Loading products...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Products</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-4 p-2 border rounded w-full md:w-1/3"
//       />

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow rounded">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-2 px-4">Image</th>
//               <th className="py-2 px-4 text-left">ID</th>
//               <th className="py-2 px-4 text-left">Name</th>
//               <th className="py-2 px-4 text-left">Price</th>
//               <th className="py-2 px-4 text-left">Stock</th>
//               <th className="py-2 px-4 text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentProducts.map((p) => (
//               <tr key={p.id} className="border-b">
                
//                 {/* PRODUCT IMAGE */}
//                 <td className="py-2 px-4">
//                   <img
//                     src={p.image}
//                     alt={p.name}
//                     className="w-16 h-16 object-cover rounded border"
//                   />
//                 </td>

//                 <td className="py-2 px-4">{p.id}</td>
//                 <td className="py-2 px-4">{p.name}</td>
//                 <td className="py-2 px-4">${p.price}</td>
//                 <td className="py-2 px-4">{p.stock}</td>

//                 <td className="py-2 px-4 flex gap-3 justify-center">

//                   {/* Edit Button */}
//                   <button
//                     onClick={() => editProduct(p)}
//                     className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500"
//                   >
//                     Edit
//                   </button>

//                   {/* Delete Button */}
//                   <button
//                     onClick={() => deleteProduct(p.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-4 flex gap-2">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 rounded ${
//               currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;

import React, { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5007/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await fetch(`http://localhost:5007/products/${id}`, {
          method: "DELETE",
        });
        setProducts(products.filter((p) => p.id !== id));
      } catch (err) {
        console.error("Error deleting product:", err);
      }
    }
  };

  return (
    <div className="min-h-screen  bg-gray-800 border bg-black">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-black via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Products
          </h1>
          <p className="text-gray-500 text-lg font-medium">Manage your product inventory</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-gray-700 bg-white border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all font-medium"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
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
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-white font-bold text-sm uppercase tracking-wider">
                <div className="col-span-1">Image</div>
                <div className="col-span-1">ID</div>
                <div className="col-span-4">Product Name</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Stock</div>
                <div className="col-span-2">Actions</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <svg
                    className="mx-auto h-16 w-16 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg font-medium">No products found</p>
                </div>
              ) : (
                filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200 items-center group"
                  >
                    {/* Image */}
                    <div className="col-span-1">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-gray-200 group-hover:ring-indigo-400 transition-all">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* ID */}
                    <div className="col-span-1">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 font-bold text-sm">
                        {product.id}
                      </span>
                    </div>

                    {/* Name */}
                    <div className="col-span-4">
                      <p className="text-gray-800 font-semibold text-base group-hover:text-indigo-600 transition-colors">
                        {product.name}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-bold text-base">
                        ${product.price}
                      </span>
                    </div>

                    {/* Stock */}
                    <div className="col-span-2">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-lg font-bold text-base ${
                          product.stock > 20
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700"
                            : product.stock > 10
                            ? "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700"
                            : "bg-gradient-to-r from-red-100 to-rose-100 text-red-700"
                        }`}
                      >
                        {product.stock}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 flex gap-2">
                      <button className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-xl hover:from-amber-500 hover:to-yellow-600 shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-pink-700 shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Stats Footer */}
        {!loading && filteredProducts.length > 0 && (
          <div className="mt-6 flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-md border border-gray-200">
            <p className="text-gray-600 font-semibold">
              Showing{" "}
              <span className="text-indigo-600 font-bold">{filteredProducts.length}</span> of{" "}
              <span className="text-purple-600 font-bold">{products.length}</span> products
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                <span className="text-indigo-700 font-bold text-sm">Total Value: </span>
                <span className="text-purple-700 font-bold text-lg">
                  ${filteredProducts.reduce((sum, p) => sum + p.price * p.stock, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}