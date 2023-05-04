import React, { useState } from "react";
import Input from "./Inputs";
import axios from "axios";


function Signup({setSubmit}) {

  //-----------STATS--------------------
 
  const [userinfo, setuserinfo] = useState([]);
  const [userinput, takeuserinput] = useState({
    username: "",
    email:"",
    password: "",
   
    });
    const [isTyping,setTyping]=useState(false)

  //-----------STATS--------------------

  //----------Handle INPUT CHANGE---------------
  function handleChange(event) {
    const { name, value } = event.target;
    takeuserinput((pre) => {
      return { ...pre, [name]: value };
    });
    setuserinfo(userinput);
    setTyping(false)
   
  }
  //----------Handle Submit---------------

  function handleSubmit(event) {
    event.preventDefault();
    
    axios
      .post("/api/signup", userinfo)
      .then((res) => {const {isType,otp,email}=res.data
    
        if(!isType){
        setSubmit({submit:true,otp:otp,email:email})
       
      }else{ setTyping(res.data.isType) }
       
      
      })
        
      
  }
  
  //------------------------------------------

  return (
   
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
         
          <button stype="submit" > SignUp </button>
       
        </form>
      </div>
    </div>
  );
}

export default Signup;
