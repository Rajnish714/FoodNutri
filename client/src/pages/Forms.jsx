import React, { useState } from "react";
import OTP from "./OTP"
import Signup from "./Signup";

function Forms(){
    
    const [isSubmit,setSubmit]=useState({submit:false})
    
      return (
     
        isSubmit.submit ?  <OTP otp={isSubmit.otp} username={isSubmit.username} email={isSubmit.email} password={isSubmit.password}/>:<Signup setSubmit={setSubmit}/>
)}
export default Forms

