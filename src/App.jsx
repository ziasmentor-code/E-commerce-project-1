




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Context Providers
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";

// User Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Success from "./pages/Success";
import Orders from "./pages/Orders";

// Admin Pages
import ProtectedRoutes from "./Admin/AdminProtectedRoutes";
import Dashboard from "./Admin/AdminDashboard";
import AdminProducts from "./Admin/AdminProducts";
import AdminUsers from "./Admin/AdminUsers";
import AdminOrders from "./Admin/AdminOrders";
import AdminSidebar from "./Admin/AdminSidebar";



// Layout Components
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            {/* Public/User Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orders" element={<Orders />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminLayout />}>
              <Route
                path="/admin"
                element={
                  <ProtectedRoutes roleRequired="admin">
                    <Dashboard />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/admin/products"
                element={
                  <ProtectedRoutes roleRequired="admin">
                    <AdminProducts />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoutes roleRequired="admin">
                    <AdminUsers />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="/admin/orders"
                element={
                  <ProtectedRoutes roleRequired="admin">
                    <AdminOrders />
                  </ProtectedRoutes>
                }
              />
               <Route
                path="/admin/sidebar"
                element={
                  <ProtectedRoutes roleRequired="admin">
                    <AdminSidebar />
                  </ProtectedRoutes>
                }
              />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" />} />
            


          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;


