import React, { useState } from "react";
import Input from "../component/Inputs";
import axios from "axios";
import OTP from "./OTP";
import Verify from "../utils/verify";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function Signup() {
  // Verify("/home", "/register");
  const [userinput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [Submited, isSubmit] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
    setIsTyping(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/signup", userinput)
      .then((res) => {
        const { status, isType } = res.data;

        if (status === "ok") {
          isSubmit(true);
        } else {
          setIsTyping(isType);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return Submited ? (
    <OTP
      username={userinput.username}
      email={userinput.email}
      password={userinput.password}
    />
  ) : (
    <div className="container">
      <div>
        <h1> SIGNUP USER </h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            handleChange={handleChange}
            name="username"
            value={userinput.username}
            placeholder="ENTER USERNAME"
          />
          <Input
            handleChange={handleChange}
            name="email"
            value={userinput.email}
            placeholder="ENTER EMAIL"
          />
          {isTyping && <p>{"user is already exist"}</p>}
          <Input
            handleChange={handleChange}
            name="password"
            value={userinput.password}
            placeholder="ENTER password"
          />
          <Button
            classStyle="btn btn-secondary mt-1  float-start"
            btnName={"Sign up"}
          />
        </form>
      </div>
      <Link to="/login" className="float-end">
        if already a user!
      </Link>
    </div>
  );
}

export default Signup;
