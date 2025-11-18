import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("loggedInUser")));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative">
      <div className="text-2xl font-bold">
        <Link to="/">I-SHAAAA</Link>
      </div>

    
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/product" className="hover:text-blue-500">Products</Link>

  
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>

        {user ? (
          <div className="flex items-center gap-3">
            <User size={22} />
            <span>Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="hover:text-blue-500">
            <User size={26} />
          </Link>
        )}
      </div>

   
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

   
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-3 p-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/product" className="hover:text-blue-500">Products</Link>

            <Link to="/cart" className="hover:text-blue-500">Cart</Link>

            {user ? (
              <>
                <div className="flex items-center gap-2 mt-2">
                  <User size={22} />
                  <span>Hi, {user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-500 text-left hover:underline mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-blue-500 flex items-center">
                <User size={22} className="mr-2" /> Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
