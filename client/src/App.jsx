import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Forms from "./pages/Forms";
import NotFoundPage from "./pages/NotFoundPage"
import axios from "axios";



function App() {
  const [isAuthenticated,setAuthenticate]=useState(false)
  useEffect(()=>{
    axios.get("/api/home").then(res=>{setAuthenticate( res.data.isAuthenticate)})
  },[])
 

  
    function PrivateRoute({ element, redirectTo, path }) {
      if (isAuthenticated) {
     
        return element;
      } else {
     
        return <Navigate to={redirectTo} replace />;
      }
    }
  
 
    function PublicRoute({ element, redirectTo, path }) {
      if (isAuthenticated) {
   
        return <Navigate to={redirectTo} replace />;
      } else {
 
        return element;
      }
    }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={<PublicRoute element={<Login />} redirectTo="/home" />}
        />
        <Route
          path="/register"
          element={<PublicRoute element={<Forms />} redirectTo="/home" />}
        />
          <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
