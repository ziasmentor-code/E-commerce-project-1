import React, { useState, useEffect, useContext } from "react";
import API from "../services/api";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);  
  const navigate=useNavigate();

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="shadow-md p-4 rounded-lg flex flex-col items-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-80 h-115 object-cover rounded-md"
          />

          <h2 className="text-lg font-semibold text-center mt-2">
            {item.name}
          </h2>

          <p className="text-md text-gray-800 mt-1">₹{item.price}</p>

          <button
            onClick={() => {addToCart(item);
              navigate("/cart");
            }}
            className="mt-2 bg-black text-white px-3 py-1 rounded"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
