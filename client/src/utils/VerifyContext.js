import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const VerifyContext = createContext();

function ContextProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/protected");
        setAuthenticated(response.data.auth);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <VerifyContext.Provider value={{ isAuthenticated, setAuthenticated }}>
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
