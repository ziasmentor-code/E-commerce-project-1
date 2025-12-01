

import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
// import logo from '../assets/logo.png';


export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();



  const { items: cart } = useContext(CartContext);
  const { wishlist: wishlistItems } = useContext(WishlistContext);

  const cartCount = cart?.length || 0;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        I-SHAAA
      </Link>


      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link to="/wishlist" className="relative text-gray-600 hover:text-black">
          <FaHeart className="w-6 h-6" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <FaShoppingCart size={22} className="text-black-100" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 rounded-full bg-gray-200 hover:bg-black-300"
          >
            <User size={26} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg flex flex-col text-black z-[999]">
              {user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setDropdownOpen(false);
                    }}
                    className="text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <Link to="/orders" className="text-left px-4 py-2 hover:bg-gray-100">
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setDropdownOpen(false);
                    }}
                    className="text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setDropdownOpen(false);
                    }}
                    className="text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


// import React, { useState, useEffect, useRef, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { User } from "lucide-react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
// import { CartContext } from "../Context/CartContext";
// import { WishlistContext } from "../Context/WishlistContext";

// export default function Navbar() {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const { items: cart } = useContext(CartContext);
//   const { wishlist } = useContext(WishlistContext);

//   const cartCount = cart?.length || 0;
//   const wishlistCount = wishlist?.length || 0;

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setDropdownOpen(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative z-50">
//       <Link to="/" className="text-2xl font-bold">I-SHAAAA</Link>

//       <div className="flex items-center gap-4">
//         <Link to="/wishlist" className="relative">
//           <FaHeart size={22} className="text-red-500" />
//           {wishlistCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
//               {wishlistCount}
//             </span>
//           )}
//         </Link>

//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={22} className="text-blue-600" />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>

//         {/* USER DROPDOWN */}
//         <div className="relative" ref={dropdownRef}>
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//           >
//             <User size={26} />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg flex flex-col text-black z-[999]">
//               {user ? (
//                 <>
//                   <button
//                     onClick={() => { navigate("/profile"); setDropdownOpen(false); }}
//                     className="text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Profile
//                   </button>
//                   <button
//                     onClick={() => { navigate("/order"); setDropdownOpen(false); }}
//                     className="text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Orders
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="text-left px-4 py-2 text-red-500 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => { navigate("/login"); setDropdownOpen(false); }}
//                     className="text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Login
//                   </button>
//                   <button
//                     onClick={() => { navigate("/register"); setDropdownOpen(false); }}
//                     className="text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Register
//                   </button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
