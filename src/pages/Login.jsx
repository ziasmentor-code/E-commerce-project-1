


// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // export default function Login() {
// //   const navigate = useNavigate();
// //   const [showForgotPassword, setShowForgotPassword] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [showPassword, setShowPassword] = useState(false);

// //   const [formData, setFormData] = useState({ email: "", password: "" });
// //   const [resetData, setResetData] = useState({
// //     email: "",
// //     newPassword: "",
// //     confirmPassword: "",
// //   });
// //   const [userId, setUserId] = useState(null);

// //   // Input change handlers
// //   const handleChange = (e) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   const handleResetChange = (e) =>
// //     setResetData({ ...resetData, [e.target.name]: e.target.value });

// //   // Login
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.get("http://localhost:5007/users");
// //       const user = res.data.find(
// //         (u) =>
// //           u.email.toLowerCase() === formData.email.toLowerCase() &&
// //           u.password === formData.password
// //       );

// //       if (!user) return toast.error("Invalid Email or Password");

// //       localStorage.setItem("user", JSON.stringify(user));
// //       toast.success("Login Successful!");

// //       // Redirect
// //       if (user.isAdmin || (user.role && user.role.toLowerCase() === "admin")) {
// //         navigate("/admin");
// //       } else {
// //         navigate("/products");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Server error, try again later");
// //     }
// //   };

// //   // Step 1: Verify email for forgot password
// //   const handleEmailCheck = async (e) => {
// //     e.preventDefault();
// //     if (!resetData.email) return toast.error("Please enter your email");

// //     try {
// //       const res = await axios.get("http://localhost:5007/users");
// //       const user = res.data.find(
// //         (u) => u.email.toLowerCase() === resetData.email.toLowerCase()
// //       );
// //       if (!user) return toast.error("Email not found!");

// //       setUserId(user.id);
// //       setStep(2);
// //       toast.success("Email verified! Enter new password.");
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Something went wrong. Try again.");
// //     }
// //   };

// //   // Step 2: Reset password
// //   const handlePasswordReset = async (e) => {
// //     e.preventDefault();
// //     if (!resetData.newPassword || !resetData.confirmPassword)
// //       return toast.error("Please fill all fields");

// //     if (resetData.newPassword !== resetData.confirmPassword)
// //       return toast.error("Passwords do not match!");

// //     if (resetData.newPassword.length < 6)
// //       return toast.error("Password must be at least 6 characters");

// //     try {
// //       await axios.patch(`http://localhost:5007/users/${userId}`, {
// //         password: resetData.newPassword,
// //       });
// //       toast.success("Password reset successful!");
// //       handleCancel();
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to reset password. Try again.");
// //     }
// //   };

// //   // Cancel forgot password
// //   const handleCancel = () => {
// //     setShowForgotPassword(false);
// //     setStep(1);
// //     setResetData({ email: "", newPassword: "", confirmPassword: "" });
// //     setUserId(null);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
// //       <div className="w-full max-w-md">
// //         <div className="text-center mb-8">
// //           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
// //             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
// //             </svg>
// //           </div>
// //           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //             {showForgotPassword ? "Reset Password" : "Welcome Back"}
// //           </h1>
// //           <p className="text-gray-600 mt-2">{showForgotPassword ? "Enter your details to reset password" : "Sign in to continue"}</p>
// //         </div>

// //         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90">
// //           {!showForgotPassword ? (
// //             // Login Form
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
// //                 <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
// //                 <div className="relative">
// //                   <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="w-full pl-3 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your password" />
// //                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">{showPassword ? "Hide" : "Show"}</button>
// //                 </div>
// //               </div>

// //               <div className="flex items-center justify-between">
// //                 <label className="flex items-center">
// //                   <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
// //                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
// //                 </label>
// //                 <button type="button" onClick={() => setShowForgotPassword(true)} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</button>
// //               </div>

// //               <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700">Sign In</button>
// //             </form>
// //           ) : (
// //             // Forgot Password Flow
// //             <>
// //               {step === 1 ? (
// //                 <form onSubmit={handleEmailCheck} className="space-y-6">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
// //                   <input type="email" name="email" value={resetData.email} onChange={handleResetChange} required className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
// //                   <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Verify Email</button>
// //                   <button type="button" onClick={handleCancel} className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">Back to Login</button>
// //                 </form>
// //               ) : (
// //                 <form onSubmit={handlePasswordReset} className="space-y-6">
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
// //                   <input type="password" name="newPassword" value={resetData.newPassword} onChange={handleResetChange} required minLength="6" className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
// //                   <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
// //                   <input type="password" name="confirmPassword" value={resetData.confirmPassword} onChange={handleResetChange} required minLength="6" className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
// //                   <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Reset Password</button>
// //                   <button type="button" onClick={handleCancel} className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">Cancel</button>
// //                 </form>
// //               )}
// //             </>
// //           )}
// //         </div>
// //         <p className="text-center text-xs text-gray-500 mt-6">© 2024 Your Company. All rights reserved.</p>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function Login() {
//   const navigate = useNavigate();
//   const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [step, setStep] = useState(1);
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [resetData, setResetData] = useState({
//     email: "",
//     newPassword: "",
//     confirmPassword: "",
//   });
//   const [userId, setUserId] = useState(null);

//   // Input change handlers
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleResetChange = (e) =>
//     setResetData({ ...resetData, [e.target.name]: e.target.value });

//   // Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get("http://localhost:5008/users"); // Correct backend port
//       const user = res.data.find(
//         (u) =>
//           u.email.toLowerCase() === formData.email.toLowerCase() &&
//           u.password === formData.password
//       );

//       if (!user) return toast.error("Invalid Email or Password");

//       localStorage.setItem("user", JSON.stringify(user));
//       toast.success("Login Successful!");

//       // Redirect based on role
//       if (user.isAdmin) {
//         navigate("/admin"); // Admin dashboard
//       } else {
//         navigate("/products"); // Normal user page
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error, try again later");
//     }
//   };

//   // Step 1: Verify email for forgot password
//   const handleEmailCheck = async (e) => {
//     e.preventDefault();
//     if (!resetData.email) return toast.error("Please enter your email");

//     try {
//       const res = await axios.get("http://localhost:5008/users");
//       const user = res.data.find(
//         (u) => u.email.toLowerCase() === resetData.email.toLowerCase()
//       );
//       if (!user) return toast.error("Email not found!");

//       setUserId(user.id);
//       setStep(2);
//       toast.success("Email verified! Enter new password.");
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong. Try again.");
//     }
//   };

//   // Step 2: Reset password
//   const handlePasswordReset = async (e) => {
//     e.preventDefault();
//     if (!resetData.newPassword || !resetData.confirmPassword)
//       return toast.error("Please fill all fields");

//     if (resetData.newPassword !== resetData.confirmPassword)
//       return toast.error("Passwords do not match!");

//     if (resetData.newPassword.length < 6)
//       return toast.error("Password must be at least 6 characters");

//     try {
//       await axios.patch(`http://localhost:5008/users/${userId}`, {
//         password: resetData.newPassword,
//       });
//       toast.success("Password reset successful!");
//       handleCancel();
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to reset password. Try again.");
//     }
//   };

//   // Cancel forgot password
//   const handleCancel = () => {
//     setShowForgotPassword(false);
//     setStep(1);
//     setResetData({ email: "", newPassword: "", confirmPassword: "" });
//     setUserId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             {showForgotPassword ? "Reset Password" : "Welcome Back"}
//           </h1>
//           <p className="text-gray-600 mt-2">{showForgotPassword ? "Enter your details to reset password" : "Sign in to continue"}</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90">
//           {!showForgotPassword ? (
//             // Login Form
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
//                 <div className="relative">
//                   <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required className="w-full pl-3 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your password" />
//                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-600 font-semibold">{showPassword ? "Hide" : "Show"}</button>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
//                   <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                 </label>
//                 <button type="button" onClick={() => setShowForgotPassword(true)} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</button>
//               </div>

//               <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700">Sign In</button>
//             </form>
//           ) : (
//             // Forgot Password Flow
//             <>
//               {step === 1 ? (
//                 <form onSubmit={handleEmailCheck} className="space-y-6">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
//                   <input type="email" name="email" value={resetData.email} onChange={handleResetChange} required className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
//                   <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Verify Email</button>
//                   <button type="button" onClick={handleCancel} className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">Back to Login</button>
//                 </form>
//               ) : (
//                 <form onSubmit={handlePasswordReset} className="space-y-6">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
//                   <input type="password" name="newPassword" value={resetData.newPassword} onChange={handleResetChange} required minLength="6" className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
//                   <input type="password" name="confirmPassword" value={resetData.confirmPassword} onChange={handleResetChange} required minLength="6" className="w-full pl-3 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
//                   <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">Reset Password</button>
//                   <button type="button" onClick={handleCancel} className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold">Cancel</button>
//                 </form>
//               )}
//             </>
//           )}
//         </div>
//         <p className="text-center text-xs text-gray-500 mt-6">© 2024 Your Company. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function Login() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.get("http://localhost:5007/users");
//       const user = res.data.find(
//         (u) =>
//           u.email.toLowerCase() === formData.email.toLowerCase() &&
//           u.password === formData.password
//       );

//       if (!user) return toast.error("Invalid Email or Password");

//       localStorage.setItem("user", JSON.stringify(user));
//       toast.success("Login Successful!");

//       if (user.isAdmin || (user.role && user.role.toLowerCase() === "admin")) {
//         navigate("/admin");
//       } else {
//         navigate("/products");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Server error, try again later");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Login
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full pl-3 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700 mb-2">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full pl-3 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-blue-600"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm text-gray-600">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-600 font-semibold">
//             Register
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

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5007/users");
      const user = res.data.find(
        (u) =>
          u.email.toLowerCase() === formData.email.toLowerCase() &&
          u.password === formData.password
      );

      if (!user) return toast.error("Invalid Email or Password");
      if (user.blocked) return toast.error("Your account is blocked!");

      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login Successful!");

      if (user.isAdmin) navigate("/admin");
      else navigate("/products");
    } catch (err) {
      console.error(err);
      toast.error("Server error. Is JSON Server running on port 5007?");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border rounded"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-3 border rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="w-full bg-blue-600 text-white p-3 rounded">
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
