import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { token, user } = useSelector(state => state.auth);

  // If not logged in → go to login
  if (!token) return <Navigate to="/login" replace />;

  // If role is required (manager / employee)
  if (role && user?.role !== role) return <Navigate to="/login" replace />;

  return children;
}
