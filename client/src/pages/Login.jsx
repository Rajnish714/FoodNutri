import React, { useState } from "react";
import Input from "./Inputs";
import axios from "axios";

function Login({ setLoggedIn }) {
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
   
    axios.post("/login",userinput)
      .then((res) => {
       console.log("data", res);
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

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;