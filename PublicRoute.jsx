import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated
    ? <Navigate to="/Dashboard" replace />
    : <Outlet />;
}

export default PublicRoute;