import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { VerifyContext } from "./VerifyContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(VerifyContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
