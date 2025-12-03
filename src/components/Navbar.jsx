

import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User,Heart,ShoppingCart } from "lucide-react";
// import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import logo from '../assets/logo.png';


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
    
    <nav className=" bg-white shadow-md sticky top-0  z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
     <div className="flex-shrink-0 cursor-pointer" onClick={()=> navigate("/")}>
      <img src={logo} alt="ishhaa logo" className="w-50  h-50 object-contain"/>
      
      </div>


      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link to="/wishlist" className="relative text-black hover:text-black">
          <Heart className="w-6 h-6" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <ShoppingCart size={22} className="text-black" />
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
      </div>
      </div>
    </nav>
  );
}

