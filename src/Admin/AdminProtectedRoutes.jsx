import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, roleRequired }) => {
  const user = { role: "admin", isLoggedIn: true }; // Replace with real auth

  if (!user.isLoggedIn || user.role !== roleRequired) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
