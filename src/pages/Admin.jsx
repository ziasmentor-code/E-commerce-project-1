import React, { useEffect, useState } from "react";
import API from "../api/Api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Admin() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load products");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      toast.success("Product Deleted");
      fetchProducts();
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

      <Link
        to="/admin/add-product"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add Product
      </Link>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Image</th>
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2">
                <img src={item.image} alt="" className="w-16" />
              </td>
              <td className="p-2">{item.title}</td>
              <td className="p-2">${item.price}</td>
              <td className="p-2">
                <button
                  onClick={() => deleteProduct(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
