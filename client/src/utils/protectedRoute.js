import { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { VerifyContext } from "./VerifyContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(VerifyContext);

  // if (isAuthenticated === null) {

  //   return <div>Loading...</div>;
  // }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
