const getFood = require("../../modules/foodapi.module");

async function httpGetFood(req, res) {
  const food = await getFood("burger");
  res.json(food);
}

module.exports = httpGetFood;
