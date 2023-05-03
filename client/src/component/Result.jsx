import React from "react";

function Result({ food, addfood }) {
  return food.map((fooditem, index) => {
    return (
      <div key={index}>
        <h1 onClick={(fooditem) => addfood(fooditem)}>
          {fooditem.name} {fooditem.calories}
        </h1>
      </div>
    );
  });
}

export default Result;
