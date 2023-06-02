import React, { useState, useEffect } from "react";
import axios from "axios";
import Foodapi from "../utils/foodapi";
import Result from "./Result";
import Input from "./Inputs";

function FindItem({ name, label, clicked }) {
  const [food, setdata] = useState([]);
  const [data, addData] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    addData(value);
  };

  function addFood(fooditem) {
    console.log(fooditem);
    axios
      .post("http://localhost:3001/api/foodinfo", fooditem)
      .then((res) => {});
    clicked(false);
  }

  useEffect(() => {
    if (data && label) {
      Foodapi({ data, setdata, label });
    }
  }, [data, label]);

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
