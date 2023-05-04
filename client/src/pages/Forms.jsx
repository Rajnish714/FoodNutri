import React, { useState } from "react";
import OTP from "./OTP"
import Signup from "./Signup";

function Forms(){
    
    const [isSubmit,setSubmit]=useState({submit:false})
    
      return (isSubmit.submit ?  <OTP otp={isSubmit.otp} email={isSubmit.email} />:<Signup setSubmit={setSubmit}/>)
}
export default Forms