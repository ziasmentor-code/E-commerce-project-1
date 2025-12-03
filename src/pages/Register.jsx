


// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword)
//       return toast.error("Please fill all fields");
//     if (password !== confirmPassword) return toast.error("Passwords do not match");

//     try {
//       const res = await axios.get("http://localhost:5007/users");
//       const existingUser = res.data.find((u) => u.email === email);
//       if (existingUser) return toast.error("Email already registered");

//       await axios.post("http://localhost:5007/users", {
//         name,
//         email,
//         password,
//         isAdmin: false,
//         blocked: false,
//       });

//       toast.success("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error. Is JSON Server running?");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             required
//             className="w-full p-3 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             required
//             className="w-full p-3 border rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             required
//             className="w-full p-3 border rounded"
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             required
//             className="w-full p-3 border rounded"
//           />
//           <button className="w-full bg-green-600 text-white p-3 rounded">
//             Register
//           </button>
//         </form>
//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword)
//       return toast.error("Please fill all fields");

//     if (password !== confirmPassword)
//       return toast.error("Passwords do not match");

//     try {
//       // Check if user already exists
//       const res = await axios.get("http://localhost:5007/users");
//       const existingUser = res.data.find((u) => u.email === email);

//       if (existingUser) return toast.error("Email already registered");

//       // Register new user
//       await axios.post("http://localhost:5007/users", {
//         name,
//         email,
//         password,
//         isAdmin: false,
//         blocked: false,
//       });

//       toast.success("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error. Is JSON Server running?");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full p-3 border rounded"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-3 border rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-3 border rounded"
//             required
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             className="w-full p-3 border rounded"
//             required
//           />

//           {/* FIXED BUTTON */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password, confirmPassword } = formData;

//     if (!name || !email || !password || !confirmPassword)
//       return toast.error("Please fill all fields");

//     if (password !== confirmPassword)
//       return toast.error("Passwords do not match");

//     try {
//       const res = await axios.get("http://localhost:5007/users");
//       const existingUser = res.data.find(
//         (u) => u.email.toLowerCase() === email.toLowerCase()
//       );

//       if (existingUser) return toast.error("Email already registered");

//       await axios.post("http://localhost:5007/users", {
//         name,
//         email,
//         password,
//         isAdmin: false,
//         blocked: false,
//       });

//       toast.success("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error! Is JSON Server running?");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             className="w-full p-3 border rounded"
//           />

//           <button type="submit" className="w-full bg-green-600 text-white p-3 rounded">
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <Link to="/login" className="text-green-600 font-semibold">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword)
      return toast.error("Please fill all fields");

    if (password !== confirmPassword)
      return toast.error("Passwords do not match");

    try {
      const res = await axios.get("http://localhost:5007/users");
      const existingUser = res.data.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) return toast.error("Email already registered");

      const newUser = {
        id: Date.now().toString(), // unique ID
        name,
        email,
        password,
        isAdmin: false,
        blocked: false
      };

      await axios.post("http://localhost:5007/users", newUser);

      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Server error! Is JSON Server running?");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
