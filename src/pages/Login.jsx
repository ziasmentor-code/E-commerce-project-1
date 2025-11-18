import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { email, password } = form;

      if (!email || !password) {
        alert("Please fill both fields!");
        setLoading(false);
        return;
      }

      const res = await fetch(`http://localhost:5002/users?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        alert("No account found. Please register first!");
        setLoading(false);
        return;
      }

      const user = users[0];

      if (user.password !== password) {
        alert("Incorrect password. Try again!");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      alert(`Welcome back, ${user.name}!`);
      navigate("/product");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong. Try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90%] sm:w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border p-2 rounded w-full"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
