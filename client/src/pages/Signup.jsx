import React, { useState } from "react";
import Input from "../component/Inputs";
import axios from "axios";

function Signup() {
  const [userinput, takeuserinput] = useState({
    username: "",
    password: "",
  });
  const [userinfo, setuserinfo] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    takeuserinput((pre) => {
      return { ...pre, [name]: value };
    });
    setuserinfo(userinput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/signup", userinfo)
      .then((res) => console.log(res.data));
  }

  return (
    <div className="container">
      <div>
        <h1>SIGNUP USER</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            name="username"
            type="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
          <input
            required
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />

          <button stype="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
