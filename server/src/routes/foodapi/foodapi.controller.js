const {getFood, saveFood} = require("../../modules/foodapi.module");

async function httpGetFood(req, res) {
  const food = await getFood("burger");
  res.json(food);
}

async function httpSaveFood(req, res) {
  const selectedFood = req.body;
  console.log(selectedFood);

  const result = await saveFood(selectedFood);
  if (!result) {
    res.json({status: "bad request"});
  }
  res.json(result);
}

module.exports = {httpGetFood, httpSaveFood};
