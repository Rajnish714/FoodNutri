import { useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Verify(route, page, redirectpage) {
  const navigate = useNavigate();

  const populateCode = useCallback(() => {
    axios
      .get(route, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.user) {
          navigate(page);
        } else {
          sessionStorage.removeItem("token");
          navigate(redirectpage);
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [route, navigate, page, redirectpage]); // Include redirectpage in the dependency array

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const user = jwt_decode(token);

        if (!user) {
          sessionStorage.removeItem("token");
          navigate(redirectpage);
        } else {
          populateCode();
        }
      } catch (error) {
        // Invalid token
        sessionStorage.removeItem("token");
        navigate(redirectpage);
      }
    } else {
      navigate(redirectpage);
    }
  }, [navigate, populateCode, redirectpage]);

  // Return something meaningful from the component
  return null;
}

export default Verify;
