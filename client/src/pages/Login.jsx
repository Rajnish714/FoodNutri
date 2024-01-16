import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../component/Inputs";
// import Verify from "../utils/verify";
import axios from "axios";
import Button from "../component/Button";
import Cookie from "js-cookie";
import { VerifyContext } from "../utils/VerifyContext";

function Login() {
  const { isAuthenticated, setAuthenticated } = useContext(VerifyContext);

  // Verify("/home", "/login");
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
        const { user, auth } = res.data;
        if (user) {
          console.log(auth, "login auth");

          Cookie.set("token", user);
          return setAuthenticated(auth);
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
          <button>
            <Link to="/">home</Link>
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
