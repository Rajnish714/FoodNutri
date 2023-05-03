import React, { useState, useEffect } from "react";
import axios from "axios";
require("dotenv").config();

import Result from "./Result";
import Input from "./Inputs";

function FindItem({ name, label, clicked }) {
  const [food, setdata] = useState([]);
  const [data, addData] = useState("");

  function handleChange(value) {
    addData(value);
  }

  function addFood(foodinfo) {
    axios
      .post("http://localhost:3001/api/foodinfo", foodinfo)
      .then((res) => {});
    clicked(false);
  }

  useEffect(() => {
    axios
      .get(`https://api.calorieninjas.com/v1/nutrition?query=${data}`, {
        headers: {
          "X-Api-Key": process.env.API_KEY,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        const updatedFoods = response.data.items.map((item) => ({
          ...item,
          category: "breakfast",
        }));
        setdata(updatedFoods);
      });
  }, [data]);

  return (
    <div className="App">
      <Input
        label={label}
        placeholder="add food"
        name={name}
        inputvalue={data}
        handleChange={handleChange}
      />

      <Result food={food} addfood={addFood} />
    </div>
  );
}

export default FindItem;
