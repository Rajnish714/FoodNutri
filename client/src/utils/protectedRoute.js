// import { useContext } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import { VerifyContex } from "./VerifyContext";

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useContext(VerifyContex);
//   console.log({ isAuthenticated }, "protected");
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };
// export default ProtectedRoute;
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { VerifyContext } from "./VerifyContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(VerifyContext);
  console.log({ isAuthenticated }, "protected");
  if (isAuthenticated === null) {
    // Loading state, you can render a loading indicator if needed
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
