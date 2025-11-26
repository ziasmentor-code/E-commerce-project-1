import React, { useState } from "react";
import API from "../api/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/products", data);
      toast.success("Product Added");
      navigate("/admin");
    } catch (err) {
      toast.error("Add Failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Add Product</h1>

      <form onSubmit={handleSubmit} className="max-w-md">

        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          className="w-full p-2 border mb-3"
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          className="w-full p-2 border mb-3"
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border mb-3"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
