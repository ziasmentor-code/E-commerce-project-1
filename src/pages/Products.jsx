


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  const [showCategory, setShowCategory] = useState(false);
  const [showSort, setShowSort] = useState(false);
 const location=useLocation();
 const queryParams=new URLSearchParams(location.search);
 const urlcategory=queryParams.get("category")
  useEffect(() => {
    axios
      .get("http://localhost:5008/products")   // ✅ Correct API URL
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // FILTER + SORT
  useEffect(() => {
    let data = [...products];

    // CATEGORY FILTER
    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    // SEARCH FILTER
    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // SORT BY PRICE
    if (sort === "low-to-high") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(data);
  }, [search, category, sort, products]);

  return (
    <div className="p-6 mt-16">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-3 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-4 mb-6">

        {/* CATEGORY DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setShowCategory(!showCategory)}
            className="px-4 py-2 border-2 border-gray-500 border-solid rounded-lg bg-white shadow-lg"
          >
            Category: {category} ▼
          </button>

          {showCategory && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg border rounded-lg z-20">
              {["All", "Men", "Women", "Kids"].map((cat) => (
                <div
                  key={cat}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setCategory(cat);
                    setShowCategory(false);
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SORT DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setShowSort(!showSort)}
            className="px-4 py-2 border-2 border-gray-500 border-solid rounded-lg bg-white shadow-lg"

          >
            Sort: {sort === "none" ? "Default" : sort} ▼
          </button>

          {showSort && (
            <div className="absolute mt-2 w-48 bg-white shadow-lg border rounded-lg z-20">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSort("low-to-high");
                  setShowSort(false);
                }}
              >
                Price: Low → High
              </div>

              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSort("high-to-low");
                  setShowSort(false);
                }}
              >
                Price: High → Low
              </div>

              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSort("none");
                  setShowSort(false);
                }}
              >
                Default
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              <Link to={`/product/${p.id}`}>
                <img
                  src={p.image || "https://via.placeholder.com/300"}
                  alt={p.name}
                  className="w-full h-[600px] object-cover rounded-lg mb-3 bg-gray-100"
                />
              </Link>

              <h2 className="text-lg font-semibold mb-1">
                <Link to={`/product/${p.id}`}>{p.name}</Link>
              </h2>

              <p className="text-gray-700 font-medium">₹{p.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Search, Filter, SlidersHorizontal, X, ChevronDown, Heart, ShoppingCart } from "lucide-react";
// import { CartContext } from "../Context/CartContext";
// import { WishlistContext } from "../Context/WishlistContext";

// export default function Product() {
//   const { addToCart } = useContext(CartContext);
//   const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("none");

//   const [showCategory, setShowCategory] = useState(false);
//   const [showSort, setShowSort] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5007/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // FILTER + SORT
//   useEffect(() => {
//     let data = [...products];

//     // CATEGORY FILTER
//     if (category !== "All") {
//       data = data.filter((item) => item.category === category);
//     }

//     // SEARCH FILTER
//     if (search.trim() !== "") {
//       data = data.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     // SORT BY PRICE
//     if (sort === "low-to-high") {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sort === "high-to-low") {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(data);
//   }, [search, category, sort, products]);

//   const categories = ["All", "Men", "Women", "Kids"];

//   const clearFilters = () => {
//     setSearch("");
//     setCategory("All");
//     setSort("none");
//   };

//   const handleWishlist = (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const isInWishlist = wishlist.some(item => item.id === product.id);
//     if (isInWishlist) {
//       removeFromWishlist(product.id);
//     } else {
//       addToWishlist(product);
//     }
//   };

//   const handleAddToCart = (e, product) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart(product);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
//             All Products
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Discover our complete collection of {filteredProducts.length} items
//           </p>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg bg-white shadow-sm"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Filter Bar */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-8">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
//             {/* Left Side - Filter Buttons */}
//             <div className="flex flex-wrap gap-3">
              
//               {/* Mobile Filter Toggle */}
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="md:hidden flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-900 transition-colors"
//               >
//                 <Filter className="w-5 h-5" />
//                 Filters
//               </button>

//               {/* Category Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowCategory(!showCategory)}
//                   className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold text-gray-900 transition-colors"
//                 >
//                   <Filter className="w-5 h-5" />
//                   {category}
//                   <ChevronDown className={`w-4 h-4 transition-transform ${showCategory ? 'rotate-180' : ''}`} />
//                 </button>

//                 {showCategory && (
//                   <div className="absolute mt-2 w-48 bg-white shadow-xl border border-gray-200 rounded-xl z-20 overflow-hidden">
//                     {categories.map((cat) => (
//                       <div
//                         key={cat}
//                         className={`px-5 py-3 cursor-pointer transition-colors ${
//                           category === cat 
//                             ? 'bg-gray-900 text-white font-semibold' 
//                             : 'hover:bg-gray-50 text-gray-900'
//                         }`}
//                         onClick={() => {
//                           setCategory(cat);
//                           setShowCategory(false);
//                         }}
//                       >
//                         {cat}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Sort Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setShowSort(!showSort)}
//                   className="flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 rounded-lg font-semibold text-gray-900 transition-colors"
//                 >
//                   <SlidersHorizontal className="w-5 h-5" />
//                   Sort
//                   <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
//                 </button>

//                 {showSort && (
//                   <div className="absolute mt-2 w-56 bg-white shadow-xl border border-gray-200 rounded-xl z-20 overflow-hidden">
//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors ${
//                         sort === "low-to-high" 
//                           ? 'bg-gray-900 text-white font-semibold' 
//                           : 'hover:bg-gray-50 text-gray-900'
//                       }`}
//                       onClick={() => {
//                         setSort("low-to-high");
//                         setShowSort(false);
//                       }}
//                     >
//                       Price: Low → High
//                     </div>

//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors ${
//                         sort === "high-to-low" 
//                           ? 'bg-gray-900 text-white font-semibold' 
//                           : 'hover:bg-gray-50 text-gray-900'
//                       }`}
//                       onClick={() => {
//                         setSort("high-to-low");
//                         setShowSort(false);
//                       }}
//                     >
//                       Price: High → Low
//                     </div>

//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors ${
//                         sort === "none" 
//                           ? 'bg-gray-900 text-white font-semibold' 
//                           : 'hover:bg-gray-50 text-gray-900'
//                       }`}
//                       onClick={() => {
//                         setSort("none");
//                         setShowSort(false);
//                       }}
//                     >
//                       Default
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Clear Filters Button */}
//               {(category !== "All" || sort !== "none" || search !== "") && (
//                 <button
//                   onClick={clearFilters}
//                   className="flex items-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-900 transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                   Clear All
//                 </button>
//               )}
//             </div>

//             {/* Right Side - Results Count */}
//             <div className="text-gray-600 font-medium">
//               Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> products
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.length === 0 ? (
//             <div className="col-span-full text-center py-20">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
//                 <Search className="w-10 h-10 text-gray-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
//               <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
//               <button
//                 onClick={clearFilters}
//                 className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             filteredProducts.map((p) => (
//               <Link
//                 key={p.id}
//                 to={`/product/${p.id}`}
//                 className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
//               >
//                 {/* Product Image */}
//                 <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
//                   <img
//                     src={p.image || "https://via.placeholder.com/300"}
//                     alt={p.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
                  
//                   {/* Hover Overlay - Black Background */}
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
                  
//                   {/* Wishlist Heart Icon - Top Right */}
//                   <button
//                     onClick={(e) => handleWishlist(e, p)}
//                     className="absolute top-3 right-3 p-2.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 z-10 group/heart"
//                   >
//                     <Heart 
//                       className={`w-5 h-5 transition-colors ${
//                         wishlist.some(item => item.id === p.id)
//                           ? 'fill-red-500 text-red-500'
//                           : 'text-gray-700 group-hover/heart:text-red-500'
//                       }`}
//                     />
//                   </button>
                  
//                   {/* Cart Icon - Appears on Hover Center */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                     <button
//                       onClick={(e) => handleAddToCart(e, p)}
//                       className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-xl hover:bg-gray-100 transform hover:scale-110 transition-all"
//                     >
//                       <ShoppingCart className="w-5 h-5" />
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4">
//                   <h2 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
//                     {p.name}
//                   </h2>
                  
//                   <div className="flex items-center justify-between">
//                     <p className="text-xl font-bold text-gray-900">
//                       ₹{p.price?.toLocaleString()}
//                     </p>
                    
//                     {/* Category Badge */}
//                     {p.category && (
//                       <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
//                         {p.category}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>

//         {/* Load More Button (Optional) */}
//         {filteredProducts.length > 0 && (
//           <div className="text-center mt-12">
//             <p className="text-gray-600 mb-4">
//               Showing all {filteredProducts.length} products
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }