import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../component/Inputs";
import Verify from "../utils/verify";
import axios from "axios";
import Button from "../component/Button";
import Cookie from "js-cookie";
function Login() {
  console.log("test log");
  Verify("/home", "/login");
  // Verify("/login", "/home");

  const [userinput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/login", userinput)
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
  };

  return (
    <div className="container">
      <div>
        <h1>Login User</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <Input
            handleChange={handleChange}
            name="email"
            value={userinput.email}
            placeholder="Enter Email"
          />

          <Input
            handleChange={handleChange}
            name="password"
            value={userinput.password}
            placeholder="Enter Password"
            type="password"
          />
          <Button classStyle="btn btn-primary mb-2" btnName="Login" />
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
