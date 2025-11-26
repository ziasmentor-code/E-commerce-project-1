
// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import API from "../api/Api";

// // export default function Product() {
// //   const [products, setProducts] = useState([]);
// //   const [filteredProducts, setFilteredProducts] = useState([]);

// //   const [search, setSearch] = useState("");
// //   const [category, setCategory] = useState("All");

// //   useEffect(() => {
// //     API.get("/products")
// //       .then((res) => {
// //         console.log("📌 PRODUCTS FROM API:", res.data);
// //         setProducts(res.data);
// //         setFilteredProducts(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   // 🔍 FILTER LOGIC
// //   useEffect(() => {
// //     let data = [...products];

// //     // CATEGORY FILTER
// //     if (category !== "All") {
// //       data = data.filter((item) => item.category === category);
// //     }

// //     // SEARCH FILTER
// //     if (search.trim() !== "") {
// //       data = data.filter((item) =>
// //         item.name.toLowerCase().includes(search.toLowerCase())
// //       );
// //     }

// //     setFilteredProducts(data);
// //   }, [search, category, products]);

// //   return (
// //     <div className="p-6 mt-16">
// //       <h1 className="text-3xl font-bold mb-6">All Products</h1>

// //       {/* 🔍 SEARCH BAR */}
// //       <input
// //         type="text"
// //         placeholder="Search products..."
// //         className="border p-3 rounded w-full mb-4"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />

// //       {/* CATEGORY BUTTONS */}
// //       <div className="flex gap-3 mb-6 flex-wrap">
// //         {["All", "Men", "Women", "Kids"].map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => setCategory(cat)}
// //             className={`px-4 py-2 rounded-full border text-sm ${
// //               category === cat
// //                 ? "bg-black text-white"
// //                 : "bg-white text-black"
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* PRODUCTS GRID */}
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //         {filteredProducts.length === 0 ? (
// //           <p>No products found.</p>
// //         ) : (
// //           filteredProducts.map((p) => (
// //             <div
// //               key={p.id}
// //               className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
// //             >
// //               {/* Image clickable */}
// //               <Link to={`/product/${p.id}`}>
// //                 <img
// //                   src={p.image}
// //                   alt={p.name}
// //                   className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
// //                 />
// //               </Link>

// //               {/* Name clickable */}
// //               <h2 className="text-lg font-semibold mb-1">
// //                 <Link to={`/product/${p.id}`}>{p.name}</Link>
// //               </h2>

// //               <p className="text-gray-700 font-medium">₹{p.price}</p>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import API from "../api/Api";

// export default function Product() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => {
//         setProducts(res.data);
//         setFilteredProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // FILTER LOGIC
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

//     setFilteredProducts(data);
//   }, [search, category, products]);

//   return (
//     <div className="p-6 mt-16">
//       <h1 className="text-3xl font-bold mb-6">All Products</h1>

//       {/* SEARCH BAR */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="border p-3 rounded w-full mb-4"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* CATEGORY DROPDOWN */}
//       <div className=" flex flex-end relative inline-block mb-6">
//         <button
//           onClick={() => setShowDropdown(!showDropdown)}
//           className="px-4 py-2 border rounded-lg bg-white shadow"
//         >
//           Category: {category} 
//         </button>

//         {showDropdown && (
//           <div className=" absolute mt-2 w-40 bg-white shadow-lg border rounded-lg z-20">
//             {["All", "Men", "Women", "Kids"].map((cat) => (
//               <div
//                 key={cat}
//                 className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
//                   cat === category ? "bg-gray-200 font-semibold" : ""
//                 }`}
//                 onClick={() => {
//                   setCategory(cat);
//                   setShowDropdown(false);
//                 }}
//               >
//                 {cat}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* PRODUCTS GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {filteredProducts.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           filteredProducts.map((p) => (
//             <div
//               key={p.id}
//               className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
//             >
//               <Link to={`/product/${p.id}`}>
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
//                 />
//               </Link>

//               <h2 className="text-lg font-semibold mb-1">
//                 <Link to={`/product/${p.id}`}>{p.name}</Link>
//               </h2>

//               <p className="text-gray-700 font-medium">₹{p.price}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/Api";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  const [showCategory, setShowCategory] = useState(false);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // APPLY FILTERS + SORT
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
            className="px-4 py-2 border rounded-lg bg-white shadow"
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
            className="px-4 py-2 border rounded-lg bg-white shadow"
          >
            Sort by: {sort === "none" ? "Default" : sort} ▼
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

      {/* PRODUCTS GRID */}
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
                  src={p.image}
                  alt={p.name}
                  className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
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
