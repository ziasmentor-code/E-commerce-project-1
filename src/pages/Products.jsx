


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  const [showCategory, setShowCategory] = useState(false);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5001/products")   // ✅ Correct API URL
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


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Search, SlidersHorizontal, ChevronDown, Heart, ShoppingCart, X } from "lucide-react";
// import toast from "react-hot-toast";

// export default function Product() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("none");

//   const [showCategory, setShowCategory] = useState(false);
//   const [showSort, setShowSort] = useState(false);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Fetch products
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // Load wishlist
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlistItems(wishlist.map(item => item.id));
//   }, []);

//   // Wishlist logic
//   const toggleWishlist = (product, e) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     const exists = wishlist.find((item) => item.id === product.id);

//     if (exists) {
//       wishlist = wishlist.filter((item) => item.id !== product.id);
//       setWishlistItems(prev => prev.filter(id => id !== product.id));
//       toast.success("Removed from wishlist");
//     } else {
//       wishlist.push(product);
//       setWishlistItems(prev => [...prev, product.id]);
//       toast.success("Added to wishlist");
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   };

//   // Filter + Sort
//   useEffect(() => {
//     let data = [...products];

//     if (category !== "All") {
//       data = data.filter((item) => item.category === category);
//     }

//     if (search.trim() !== "") {
//       data = data.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (sort === "low-to-high") {
//       data.sort((a, b) => a.price - b.price);
//     } else if (sort === "high-to-low") {
//       data.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(data);
//   }, [search, category, sort, products]);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-8 border-l-4 border-black pl-4">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
//           <p className="text-gray-600">Discover our latest collection</p>
//         </div>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search for products..."
//               className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-black focus:ring-opacity-10 focus:border-black outline-none transition-all shadow-sm"
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

//         {/* Filters Bar */}
//         <div className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-4 mb-8">
//           <div className="flex flex-wrap items-center justify-between gap-4">
            
//             {/* Left Side - Filters */}
//             <div className="flex items-center gap-3 flex-wrap">
//               <div className="flex items-center gap-2 text-gray-600">
//                 <SlidersHorizontal className="w-5 h-5" />
//                 <span className="font-semibold">Filters:</span>
//               </div>

//               {/* CATEGORY DROPDOWN */}
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     setShowCategory(!showCategory);
//                     setShowSort(false);
//                   }}
//                   className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 rounded-lg bg-white hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-gray-700"
//                 >
//                   <span>Category: {category}</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${showCategory ? 'rotate-180' : ''}`} />
//                 </button>

//                 {showCategory && (
//                   <div className="absolute mt-2 w-44 bg-white shadow-xl border-2 border-gray-200 rounded-xl overflow-hidden z-20">
//                     {["All", "Men", "Women", "Kids"].map((cat) => (
//                       <div
//                         key={cat}
//                         className={`px-5 py-3 cursor-pointer transition-colors font-medium ${
//                           category === cat 
//                             ? 'bg-black text-white' 
//                             : 'hover:bg-gray-100 text-gray-700'
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

//               {/* SORT DROPDOWN */}
//               <div className="relative">
//                 <button
//                   onClick={() => {
//                     setShowSort(!showSort);
//                     setShowCategory(false);
//                   }}
//                   className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 rounded-lg bg-white hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-gray-700"
//                 >
//                   <span>Sort: {sort === "none" ? "Default" : sort === "low-to-high" ? "Low → High" : "High → Low"}</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
//                 </button>

//                 {showSort && (
//                   <div className="absolute mt-2 w-52 bg-white shadow-xl border-2 border-gray-200 rounded-xl overflow-hidden z-20">
//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors font-medium ${
//                         sort === "low-to-high" 
//                           ? 'bg-black text-white' 
//                           : 'hover:bg-gray-100 text-gray-700'
//                       }`}
//                       onClick={() => {
//                         setSort("low-to-high");
//                         setShowSort(false);
//                       }}
//                     >
//                       Price: Low → High
//                     </div>

//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors font-medium ${
//                         sort === "high-to-low" 
//                           ? 'bg-black text-white' 
//                           : 'hover:bg-gray-100 text-gray-700'
//                       }`}
//                       onClick={() => {
//                         setSort("high-to-low");
//                         setShowSort(false);
//                       }}
//                     >
//                       Price: High → Low
//                     </div>

//                     <div
//                       className={`px-5 py-3 cursor-pointer transition-colors font-medium ${
//                         sort === "none" 
//                           ? 'bg-black text-white' 
//                           : 'hover:bg-gray-100 text-gray-700'
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

//               {/* Active Filters Badge */}
//               {(category !== "All" || sort !== "none" || search) && (
//                 <button
//                   onClick={() => {
//                     setCategory("All");
//                     setSort("none");
//                     setSearch("");
//                   }}
//                   className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm"
//                 >
//                   Clear Filters
//                 </button>
//               )}
//             </div>

//             {/* Right Side - Results Count */}
//             <div className="text-sm text-gray-600 font-medium">
//               {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
//             </div>
//           </div>
//         </div>

//         {/* PRODUCT GRID */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-200">
//               <Search className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
//             <p className="text-gray-600">Try adjusting your filters or search terms</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map((p) => {
//               const isWish = wishlistItems.includes(p.id);

//               return (
//                 <div
//                   key={p.id}
//                   className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300"
//                 >
//                   <Link to={`/product/${p.id}`} className="block relative">
//                     {/* Product Image */}
//                     <div className="relative overflow-hidden bg-gray-100">
//                       <img
//                         src={p.image || "https://via.placeholder.com/300"}
//                         alt={p.name}
//                         className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
                      
//                       {/* Wishlist Button */}
//                       <button
//                         onClick={(e) => toggleWishlist(p, e)}
//                         className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${
//                           isWish 
//                             ? 'bg-red-500 text-white scale-110' 
//                             : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
//                         }`}
//                       >
//                         <Heart className={`w-5 h-5 ${isWish ? 'fill-current' : ''}`} />
//                       </button>

//                       {/* Price Badge */}
//                       <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-full shadow-lg">
//                         <span className="text-lg font-bold">₹{p.price}</span>
//                       </div>
//                     </div>
//                   </Link>

//                   {/* Product Details */}
//                   <div className="p-5">
//                     <Link to={`/product/${p.id}`}>
//                       <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
//                         {p.name}
//                       </h2>
//                     </Link>

//                     <div className="flex items-center justify-between mb-4">
//                       <span className="text-2xl font-bold text-gray-900">₹{p.price}</span>
//                       <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
//                         {p.category || "Fashion"}
//                       </span>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-2">
//                       <button
//                         onClick={(e) => toggleWishlist(p, e)}
//                         className={`flex-1 px-4 py-2.5 rounded-lg font-semibold transition-all ${
//                           isWish
//                             ? 'bg-red-100 text-red-700 hover:bg-red-200'
//                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                         }`}
//                       >
//                         {isWish ? '💖 Saved' : '❤️ Wishlist'}
//                       </button>

//                       <Link
//                         to={`/checkout/${p.id}`}
//                         className="flex-1 text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
//                       >
//                         <span className="flex items-center justify-center gap-2">
//                           <ShoppingCart className="w-4 h-4" />
//                           Order
//                         </span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


