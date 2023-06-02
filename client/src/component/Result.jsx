import React from "react";

function Result({ food, addfood }) {
  console.log(food);
  return food.map((fooditem, index) => {
    return (
      <div key={fooditem.foodId}>
        <h1>
          {fooditem.food.label} {fooditem.food.brand} calories{" "}
          {Math.floor(fooditem.food.nutrients.ENERC_KCAL)}
        </h1>
      </div>
    );
  });
}

export default Result;
