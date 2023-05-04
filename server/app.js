const express = require("express");
const { mongoose, Schema } = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const myNode = require("./nodemailer");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT
//mongoose schema-----------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FoodSchema = new mongoose.Schema({});
const UserSchema = new mongoose.Schema({
  username:String,
  email:String,
  password:String
})

const FOOD = mongoose.model("Food", FoodSchema);
const USER = mongoose.model("User",UserSchema)
//------------------------------------------------------------

//  getting food info and add food into db

// app.post("/api/foodinfo", (req, res) => {
//   const selectedFood = req.body;
//   FOOD.create(selectedFood).then(() => {
//     console.log("aa gaya data");
//     console.log(req.body);
//   });
//   res.json({ status: "ok" });
// });
//--------------------------------------------------

// ------------- user registeration ----------------------

app.post("/api/signup", (req, res) => {
  const {username,email,password}=req.body

  USER.findOne({email:email}).then(founduser=>{
  console.log(founduser);
  if(founduser){
    res.send({isType:true})
  }else{
    const otp = Math.floor(Math.random() * (10000-3000+1)+3000)
    res.send({isType:false,otp,email})
    myNode.sendermail(username,email,otp);
    
  }
 })
// const user = new USER({
//   username:req.body.username,
//   email:req.body.email,
//   password:req.body.password
// })
// user.save()
 
 

});

// app.get("/", (req, res) => {
//   // 
// });
//-------------------------------------
app.listen(port || 3001, () => {
  console.log(`server has started on ${port}`);
});
