import React, { useContext, useState } from "react";
import FindItem from "../component/FindItem";

// import { useNavigate } from "react-router-dom";
//import Cookie from "js-cookie";
import { VerifyContext } from "../utils/VerifyContext";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const { setAuthenticated } = useContext(VerifyContext);

  const [itemprops, setItemProp] = useState({
    name: "",
    label: "",
    isClicked: false,
  });

  const item = [
    { name: "Breakfast", label: "BREAKFAST" },
    { name: "Lunch", label: "LUNCH" },
    { name: "Dinner", label: "DINNER" },
  ];

  function handleprop(items) {
    setItemProp({
      name: items.name,
      label: items.label,
      isClicked: true,
    });
  }

  const handleLogout = async () => {
    const response = await axios.get("/api/logout");
    console.log(response);
    return setAuthenticated(false);
  };

  return (
    <div>
      {itemprops.isClicked ? (
        <FindItem
          name={itemprops.name}
          label={itemprops.label}
          clicked={setItemProp}
        />
      ) : (
        item.map((items, index) => {
          return (
            <div key={index}>
              <h1 onClick={() => handleprop(items)}>{items.label}</h1>
            </div>
          );
        })
      )}
      <button
        className="btn btn-danger ms-1 mt-1"
        type="logout"
        onClick={() => handleLogout()}
      >
        Logout
      </button>

      <button>
        <Link to="/test">test</Link>
      </button>
    </div>
  );
}

export default Home;
