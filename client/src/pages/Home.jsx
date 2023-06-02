import React, { useState } from "react";
import FindItem from "../component/FindItem";
import Verify from "../utils/verify";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

function Home() {
  Verify("/home", "/login");
  const navigate = useNavigate();

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

  function handleLogout() {
    Cookie.remove("token");
    navigate("/login");
  }

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
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
