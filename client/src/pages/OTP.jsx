import React, { useState } from "react";
import Input from "./Inputs";
import axios from "axios";

function OTP({ username, email, password }) {
  const [User, setUserOTP] = useState({
    username: username,
    email: email,
    password: password,
    otp: "",
  });
  // const [username,setusername]=useState({})

  console.log(User.otp);

  console.log(User);
  function handleSubmit(event) {
    event.preventDefault();

    axios.post("/api/otp", User).then((res) => {
      if (res.data.status === "ok") {
        sessionStorage.setItem("auth", res.data.auth);
        window.location.href = "/home";
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        We Sent an OTP on "{User.email}", gamil Address! Please Verify your OTP
      </h1>
      <Input
        handleChange={(e) =>
          setUserOTP((pre) => {
            return { ...pre, otp: e.target.value };
          })
        }
        name="otp"
        value={OTP}
        placeholder="ENTER OTP"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default OTP;
