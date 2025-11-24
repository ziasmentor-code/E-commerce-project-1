

import React, { useState, useEffect } from "react";
import API from "../api/Api";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        console.log("📌 PRODUCT DATA FROM API:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border p-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
          >
           
            <img
              src={p.image} 
              alt={p.name}
              className="w-full h-150 object-cover rounded-lg mb-3 bg-gray-100"
            />

            
            <h2 className="text-lg font-semibold">{p.name}</h2>

 
            <p className="text-gray-700 font-medium mt-1">₹{p.price}</p>

         
            <p className="text-gray-500 text-sm mt-2 line-clamp-3">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
