import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Forms from "./pages/Forms";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>:  <Route path="/" element={<Forms/>} />
       
      
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
