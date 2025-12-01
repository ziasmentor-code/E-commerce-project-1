

import React from "react";
import { Facebook,Instagram,Twitter,Mail,Phone,MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
 
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">I-SHAAAA</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fashion is not just clothing —i t’s confidence.  
            Discover timeless elegance crafted for your style.
          </p>
         <div className="flex space-x-3">
          <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
           < Facebook size={18}/>
          </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
              <Instagram size={18}/>
            </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter size={18}/>
              </a>
            
         </div>
        </div>


      
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Tops</a></li>
            <li><a href="#" className="hover:text-white">Jeans</a></li>
            <li><a href="#" className="hover:text-white">Sweaters</a></li>
            <li><a href="#" className="hover:text-white">Coats</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">Subscribe for new arrivals & offers</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-lg w-full text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-r-lg hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} I-SHAAAA Fashion. All rights reserved.
      </div>
    </footer>
  );
}
