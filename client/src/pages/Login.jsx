import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Input from "../component/Inputs";
import Button from "../component/Button";
import { VerifyContext } from "../utils/VerifyContext";

function Login() {
  const { isAuthenticated, login } = useContext(VerifyContext);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(userinput);
  };
  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
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
            type="password"
            handleChange={handleChange}
            name="password"
            value={userinput.password}
            placeholder="Enter Password"
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
