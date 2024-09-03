const express = require("express");
const foodRouter = express.Router();
const httpGetFood = require("./foodapi.controller");

foodRouter.get("/", httpGetFood);

module.exports = foodRouter;
