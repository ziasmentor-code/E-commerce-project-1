import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/Api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get(`/users?email=${form.email}`);
      if (res.data.length > 0) {
        alert("User already exists");
        return;
      }
      await API.post("/users", { ...form, role: "user" });
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          name="name"
          placeholder="Name"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-green-500 text-white w-full py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
