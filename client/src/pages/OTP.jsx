import React, { useState } from "react";
import Cookie from "js-cookie";
import Input from "../component/Inputs";
import axios from "axios";
import Verify from "../utils/verify";

function OTP({ username, email, password }) {
  Verify("/home", "/register");
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

    axios
      .post("/api/otp", User)
      .then((res) => {
        const { user } = res.data;
        if (user) {
          Cookie.set("token", user);
          window.location.href = "/home";
        } else {
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        We Sent an OTP on "{User.email}", gmail Address! Please Verify your OTP
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
