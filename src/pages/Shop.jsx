// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Shop() {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch products from your local db.json via JSON server
//     axios
//       .get("http://localhost:5002/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleProductClick = (id) => {
//     // Navigate to product page or product details if implemented
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-6 py-12">
//       <h1 className="text-4xl font-bold text-center mb-10">Shop Our Collection</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
//             onClick={() => handleProductClick(product.id)}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-700 mb-4">₹{product.price}</p>
//               <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
