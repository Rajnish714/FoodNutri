const express = require("express");
const { mongoose, Schema } = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const myNode = require("./nodemailer");
const passport = require("passport");
const session = require("express-session");
const passportLocalMongoose=require("passport-local-mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT

app.use(session({
  secret: "My dog name was jack",
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
//mongoose schema-----------------------------------------------
mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FoodSchema = new mongoose.Schema({});
const UserSchema = new mongoose.Schema({
  username: { type: String, required: false }, 
  email:String,
  password:String
})

UserSchema.plugin(passportLocalMongoose)

const FOOD = mongoose.model("Food", FoodSchema);
const USER = mongoose.model("User",UserSchema)

passport.use(USER.createStrategy());
passport.serializeUser(USER.serializeUser());
passport.deserializeUser(USER.deserializeUser())

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
console.log("signup",password);
  USER.findOne({email:email}).then(founduser=>{
  console.log(founduser);
  if(founduser){
    res.send({isType:true})
  }else{
    const otp = Math.floor(Math.random() * (10000-3000+1)+3000)
    res.send({isType:false,otp,username,email,password})
    myNode.sendermail(username,email,otp);
    
  }
 })
  
});

app.post("/api/register", (req, res) => {
  const {username,email,password}=req.body
  USER.register({username:username,email:email},password , (err,user)=>{
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,()=>{
        res.redirect("/api/home")
      })
    }
  })

});

app.get("/api/home", (req, res) => {

  if(req.isAuthenticated()){
    res.send({isAuthenticate:true})
    
  }else{
    res.send({isAuthenticate:false})
  }
  })

 // Import necessary modules and dependencies

app.post("/login", (req, res, next) => {
  console.log(req.body.email);
  
});


app.post("/api/logout",(req,res)=>{
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/api/home');
  });})
//-------------------------------------
app.listen( 3001, () => {
  console.log(`server has started on 3001`);
});


































// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const myNode = require("./nodemailer");
// // const passport = require("passport");
// // const session = require("express-session");
// // const passportLocalMongoose = require("passport-local-mongoose");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // const port = process.env.PORT;

// // app.use(
// //   session({
// //     secret: "My dog name was jack",
// //     resave: false,
// //     saveUninitialized: false,
// //   })
// // );
// // app.use(passport.initialize());
// // app.use(passport.session());

// // mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // const FoodSchema = new mongoose.Schema({});
// // const UserSchema = new mongoose.Schema({
// //   username: { type: String, required: false }, // Make it optional
// //   email: { type: String, required: true },
// //   password: { type: String, required: true }
// // });
// // UserSchema.plugin(passportLocalMongoose);

// // const Food = mongoose.model("Food", FoodSchema);
// // const User = mongoose.model("User", UserSchema);

// // passport.use(User.createStrategy());
// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());

// // app.post("/api/signup", (req, res) => {
// //   const { username, email, password } = req.body;

// //   User.findOne({ email: email }).then((foundUser) => {
// //     if (foundUser) {
// //       res.send({ isType: true });
// //     } else {
// //       const otp = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);
// //       res.send({ isType: false, otp, username, email, password });
// //       myNode.sendermail(username, email, otp);
// //     }
// //   });
// // });

// // app.post("/api/register", (req, res) => {
// //   const { username, email, password } = req.body;

// //   User.register({ username: username, email: email }, password, (err, user) => {
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       passport.authenticate("local")(req, res, () => {
// //         res.redirect("/home");
// //       });
// //     }
// //   });
// // });


// // app.post("/api/login", (req, res) => {
// //   const { email, password } = req.body;

// //   const defaultUsername = "Guest"; // Default username value

// //   const user = new User({
// //     username: defaultUsername,
// //     email: email,
// //     password: password
// //   });

// //   req.login(user, (err) => {
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       passport.authenticate("local")(req, res, () => {
// //         res.send("Login successful");
// //       });
// //     }
// //   });
// // });
// // app.post("/api/logout",(req,res)=>{
// //   console.log("i got clicked");
// //   req.logout().then(res=>{
// //     console.log(res);
// //   })

// // })
// // app.listen(3001, () => {
// //   console.log("Server has started on port 3001");
// // });











