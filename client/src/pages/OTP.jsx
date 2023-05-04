
import React, {  useState } from "react";
import Input from "./Inputs";



function OTP({otp,email}) {
  const [OTP] = useState(otp);
  const [Email] = useState(email);
  const [userOTP, setUserOTP] = useState('');
// const [username,setusername]=useState({})
 console.log(Email);

  function handleSubmit(event) {
    event.preventDefault();
   
    if (userOTP === OTP.toString()) {
      console.log("user verified");
    } else {
      console.log("wrong otp");
    }

   
  }
  return (
    <form onSubmit={handleSubmit}>
    <h1>We Sent an OTP on "{Email}", gamil Address! Please Verify your OTP</h1>
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
