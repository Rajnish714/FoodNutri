import React, { useState } from "react";
import FindItem from "../component/FindItem";

function Home() {
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
    </div>
  );
}

export default Home;
