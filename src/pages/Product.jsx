

// // import React, { useState, useEffect } from "react";
// // import API from "../api/Api";

// // export default function Product() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     API.get("/products")
// //       .then((res) => {
// //         console.log("📌 PRODUCT DATA FROM API:", res.data);
// //         setProducts(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold mb-6">All Products</h1>

// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //         {products.map((p) => (
// //           <div
// //             key={p.id}
// //             className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
// //           >
           
// //             <img
// //               src={p.image} 
// //               alt={p.name}
// //               className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
// //             />

            
// //             <h2 className="text-lg font-semibold">{p.name}</h2>

 
// //             <p className="text-gray-700 font-medium mt-1">₹{p.price}</p>

         
// //             <p className="text-gray-500 text-sm mt-2 line-clamp-3">{p.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // 👈 import Link
// import API from "../api/Api";

// export default function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => {
//         console.log("📌 PRODUCT DATA FROM API:", res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">All Products</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
//           >
//             {/* Clickable Image → Product Details */}
//             <Link to={`/products/${p.id}`}>
//               <img
//                 src={p.image} 
//                 alt={p.name}
//                 className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
//               />
//             </Link>

//             {/* Clickable Name → Product Details */}
//             <h2 className="text-lg font-semibold">
//               <Link to={`/products/${p.id}`}>{p.name}</Link>
//             </h2>

//             {/* Price */}
//             <p className="text-gray-700 font-medium mt-1">₹{p.price}</p>

//             {/* Description */}
//             <p className="text-gray-500 text-sm mt-2 line-clamp-3">{p.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import API from "../api/Api";

// export default function Product() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => {
//         console.log("📌 PRODUCT DATA FROM API:", res.data);
//         setProducts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">All Products</h1>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
//           >
//             {/* Image clickable to details */}
//             <Link to={`/products/${p.id}`}>
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-[600px] object-cover rounded-lg mb-3 bg-gray-100"
//               />
//             </Link>

//             {/* Name clickable to details */}
//             <h2 className="text-lg font-semibold mb-1">
//               <Link to={`/products/${p.id}`}>{p.name}</Link>
//             </h2>

//             {/* Price */}
//             <p className="text-gray-700 font-medium mb-1">₹{p.price}</p>

//             {/* Description */}
//             {/* <p className="text-gray-500 text-sm line-clamp-3">{p.description}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../api/Api";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        console.log("📌 PRODUCTS FROM API:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 mt-16">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
          >
            {/* Image clickable */}
            <Link to={`/product/${p.id}`}>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
              />
            </Link>

            {/* Name clickable */}
            <h2 className="text-lg font-semibold mb-1">
              <Link to={`/product/${p.id}`}>{p.name}</Link>
            </h2>

            <p className="text-gray-700 font-medium">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

