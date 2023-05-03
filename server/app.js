const express = require("express");
const { mongoose, Schema } = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const myNode = require("./nodemailer");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose schema-----------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FoodSchema = new mongoose.Schema({});

const FOOD = mongoose.model("Food", FoodSchema);

//------------------------------------------------------------

//  getting food info and add food into db

app.post("/api/foodinfo", (req, res) => {
  const selectedFood = req.body;
  FOOD.create(selectedFood).then(() => {
    console.log("aa gaya data");
  });
  res.json({ status: "ok" });
});
//--------------------------------------------------

// ------------- user registeration ----------------------

app.post("/api/signup", (req, res) => {
  res.json({ userinfo: req.body });
});

app.get("/", (req, res) => {
  myNode.sendermail();
});
//-------------------------------------
app.listen(process.env.PORT || 3001, () => {
  console.log(`server has started on ${process.env.PORT}`);
});
