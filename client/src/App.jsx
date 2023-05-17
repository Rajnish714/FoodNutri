import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NotFoundPage from "./component/NotFoundPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  //--------------- react custom routing -----------------------------

  //-----------------------------------------------------------------
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// function PrivateRoute({ element, redirectTo, path }) {
//   if (isAuthenticated) {
//     return element;
//   } else {
//     return <Navigate to={redirectTo} replace />;
//   }
// }

// function PublicRoute({ element, redirectTo, path }) {
//   if (isAuthenticated) {
//     return <Navigate to={redirectTo} replace />;
//   } else {
//     return element;
//   }
// }
