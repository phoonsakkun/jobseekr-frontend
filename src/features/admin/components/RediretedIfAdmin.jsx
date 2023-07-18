import React from "react";
import { useAdmin } from "../../../contexts/AdminContext";
import { Navigate } from "react-router-dom";

function RediretedIfAdmin({ children }) {
  const { admin } = useAdmin();
  if (admin) {
    return <Navigate to="/admin" />;
  }
  return children;
}

export default RediretedIfAdmin;
