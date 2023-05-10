

import React, { useState } from "react";
import Input from "./Inputs";
import axios from "axios";

function Signup({ setSubmit }) {
  const [userinput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
    setIsTyping(false);
    console.log(userinput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/signup", userinput)
      .then((res) => {
        const { isType, otp, username, email, password } = res.data;

        if (!isType) {
          setSubmit({ submit: true, otp, username, email, password });
        } else {
          setIsTyping(res.data.isType);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;


































// import React, { useState } from "react";
// import Input from "./Inputs";
// import axios from "axios";


// function Signup({setSubmit}) {

//   //-----------STATS--------------------
 
//   const [userinfo, setuserinfo] = useState([]);
//   const [userinput, takeuserinput] = useState({
//     username: "",
//     email:"",
//     password: "",
   
//     });
//     const [isTyping,setTyping]=useState(false)
// console.log(userinfo);
//   //-----------STATS--------------------

//   //----------Handle INPUT CHANGE---------------
//   function handleChange(event) {
//     const { name, value } = event.target;
//     takeuserinput((pre) => {
//       return { ...pre, [name]: value };
//     });
//     setuserinfo(userinput);
//     setTyping(false)
   
//   }
//   //----------Handle Submit---------------

//   function handleSubmit(event) {
//     event.preventDefault();
    
//     axios
//       .post("/api/signup", userinfo)
//       .then((res) => {const {isType,otp,username,email,password}=res.data
    
//         if(!isType){
//         setSubmit({submit:true,otp:otp,username:username,email:email,password:password})
       
//       }else{ setTyping(res.data.isType) }
       
      
//       })
        
      
//   }
  
//   //------------------------------------------

//   return (
   
//    <div className="container">
     
//       <div>
//         <h1> SIGNUP USER </h1>
//       </div>
     
//       <div>
//         <form onSubmit={handleSubmit}>
      
//         <Input
//             handleChange={handleChange}
//             name="username"
//             value={userinput.username}
//             placeholder="ENTER USERNAME"
            
//           />
//           <Input
//             handleChange={handleChange}
//             name="email"
//             value={userinput.email}
//             placeholder="ENTER EMAIL"
//           />
//            {isTyping && <p>{"user is already exist"}</p>}
//           <Input
//             handleChange={handleChange}
//             name="password"
//             value={userinput.password}
//             placeholder="ENTER password"
//           />
         
//           <button stype="submit" > SignUp </button>
       
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;