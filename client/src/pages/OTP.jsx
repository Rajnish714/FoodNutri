
import React, {  useState } from "react";
import Input from "./Inputs";
import axios from "axios"


function OTP({otp,username,email,password}) {
  const [OTP] = useState(otp);
  const [User] = useState({username:username,email:email,password:password});
  const [userOTP, setUserOTP] = useState('');
 
// const [username,setusername]=useState({})


  function handleSubmit(event) {
    event.preventDefault();
   
    if (userOTP === OTP.toString()) {
      console.log("user verified");
  
      axios
      .post("/api/register",User)
      
    } else {
      console.log("wrong otp");
    }

   
  }
  return (
    <form onSubmit={handleSubmit}>
    <h1>We Sent an OTP on "{User.email}", gamil Address! Please Verify your OTP</h1>
       <Input
            handleChange={e=>setUserOTP(e.target.value)}
            name="otp"
            value={OTP}
            placeholder="ENTER OTP"
          />
          <button type="submit">Submit</button>
    </form>
  );
}
export default OTP;


