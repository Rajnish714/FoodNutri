const express = require("express");
const foodRouter = express.Router();
const {httpGetFood, httpSaveFood} = require("./foodapi.controller");

foodRouter.get("/getFood", httpGetFood);

foodRouter.post("/addFood", httpSaveFood);

module.exports = foodRouter;
