import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const VerifyContext = createContext();

function ContextProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(null);

  const login = async (userinput) => {
    try {
      const response = await axios.post("/login", userinput);
      console.log(response);
      return setAuthenticated(response.data.access_token);

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

  const checkRefreshToken = async () => {
    const response = await axios.get("/refresh-token");
    console.log(response);
    try {
      if (response) {
        setAuthenticated(response.data.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkRefreshToken();
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
