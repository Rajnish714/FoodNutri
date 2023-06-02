import { useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Verify(page, redirectpage, logout) {
  const navigate = useNavigate();

  const populateCode = useCallback(() => {
    axios
      .get("/api/verifytoken", {
        headers: {
          "x-access-token": Cookie.get("token"),
        },
      })
      .then((res) => {
        const { user } = res.data;
        if (user) {
          navigate(page);
        } else {
          Cookie.remove("token");
          navigate(redirectpage);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [navigate, page, redirectpage]); // Include redirectpage in the dependency array

  useEffect(() => {
    const gettoken = Cookie.get("token");
    const token = decodeURIComponent(gettoken);

    if (token) {
      try {
        const user = jwt_decode(token);

        if (!user) {
          Cookie.remove("token");
          navigate(redirectpage);
        } else {
          populateCode();
        }
      } catch (error) {
        // Invalid token
        Cookie.remove("token");
        navigate(redirectpage);
      }
    } else {
      navigate(redirectpage);
    }
  }, [navigate, populateCode, redirectpage]);

  // Return something meaningful from the component
  return populateCode;
}

export default Verify;
