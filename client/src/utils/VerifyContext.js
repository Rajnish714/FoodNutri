import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const VerifyContext = createContext();

function ContextProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(null);

  const login = async (userinput) => {
    try {
      const response = await axios.post("/login", userinput);
      console.log(response);
      return setAuthenticated(response.data.accessToken);

      // const { user, auth } = res.data;
      // if (user) {
      //   console.log(auth, "login auth");

      //   Cookie.set("token", user);
      //   setAuthenticated(auth);
      //   window.location.href = "/home";
      // } else {
      //   window.location.href = "/login";
      // }
    } catch (error) {
      console.log(error);
    }
  };
  let count = 0;
  // const ref_token = localStorage.getItem("authh");
  useEffect(() => {
    const fetchData = async () => {
      console.log((count += 1));
      // if (isAuthenticated) {
      //   try {
      //     const response = await axios.get("api/genarate_token", {
      //       header: {
      //         autherization: `bearer ${isAuthenticated}`,
      //       },
      //     });
      //     setAuthenticated(response)
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
      // elseif(ref_token){

      // }
      console.log("every route");
      // if (ref_token) {
      //   try {
      //     const response = await axios.get("api/refreshtoken", {
      //       headers: {
      //         Authorization: `Bearer ${ref_token}`,
      //       },
      //     });
      //     setAuthenticated(response.data.auth);
      //   } catch (err) {
      //     console.log(err);
      //     setAuthenticated(false);
      //   }
      // } else {
      //   console.log(false);
      //   setAuthenticated(false);
      // }
    };
    fetchData();
  }, []);

  return (
    <VerifyContext.Provider
      value={{ isAuthenticated, setAuthenticated, login }}
    >
      {children}
    </VerifyContext.Provider>
  );
}

export default ContextProvider;

// function ContextProvider({ children }) {
//   const [isAuthenticated, setAuthenticated] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/protected");

//         return setAuthenticated(response.data.auth);
//       } catch (err) {
//         console.log(err);
//       }
//       console.log();
//     };
//     fetchData();
//   }, [isAuthenticated]);

//   return (
//     <VerifyContex.Provider value={{ isAuthenticated }}>
//       {children}
//     </VerifyContex.Provider>
//   );
// }

// export default ContextProvider;
