const express = require("express");
const loginRouter = express.Router();
const httpLogin = require("./login.controller");

loginRouter.get("/", httpLogin);

module.exports = loginRouter;
