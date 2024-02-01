import React, { useContext, useState } from "react";
import FindItem from "../component/FindItem";

// import { useNavigate } from "react-router-dom";
//import Cookie from "js-cookie";
import { VerifyContext } from "../utils/VerifyContext";
import { Navigate, Link } from "react-router-dom";
function Home() {
  const { setAuthenticated } = useContext(VerifyContext);
  // Verify("/home", "/login");
  // const navigate = useNavigate();

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
    return setAuthenticated(false);
    //Cookie.remove("token");
    // navigate("/login");
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

      <button>
        <Link to="/test">test</Link>
      </button>
    </div>
  );
}

export default Home;
