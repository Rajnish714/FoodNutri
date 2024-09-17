const axios = require("axios");
//const models = require("../../db");

async function getFood(data) {
  const apiKey = "11b7e9340c4ed13136e9c3862efb3ad1%09";
  const app_id = "bab8959a";
  const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${apiKey}&ingr=${data}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error("Error fetching food data");
  }
}

async function saveFood(selectedFood) {
  return {food: selectedFood, msg: "food add ho gaya"};

  //toDo-  use updateOne method to create food model
  // await models.Food.update(selectedFood).then(() => {});
}

module.exports = {saveFood, getFood};
