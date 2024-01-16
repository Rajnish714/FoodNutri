import React from "react";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./utils/protectedRoute";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

function App() {
  //--------------- react custom routing -----------------------------

  //-----------------------------------------------------------------

  // }
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<Home />} path="/home" />
          <Route element={<Test />} path="/test" />
        </Route>

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
