const express = require("express");
const { mongoose, Schema } = require("mongoose");
var models = require("./db")(mongoose);
var cors = require("cors");
const bodyParser = require("body-parser");
const myNode = require("./nodemailer");
const session = require("express-session");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const bcrypt = require("bcrypt");

const saltRounds = 10;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "My dog name was jack",
    resave: false,
    saveUninitialized: false,
  })
);

//mongoose schema-----------------------------------------------

//------------------------------------------------------------

//  getting food info and add food into db

app.post("/api/foodinfo", (req, res) => {
  const selectedFood = req.body;
  models.Food.create(selectedFood).then(() => {
    console.log("aa gaya data");
    console.log(req.body);
  });
  res.json({ status: "ok" });
});
//--------------------------------------------------

// ------------- user registeration ----------------------

app.post("/api/signup", (req, res) => {
  const { username, email } = req.body;

  models.user
    .findOne({ email: email })
    .then((founduser) => {
      if (founduser) {
        res.send({ isType: true });
      } else {
        const otp = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);
        req.session.otp = otp;
        res.json({ isType: false, status: "ok" });
        myNode.sendermail(username, email, otp);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/otp", (req, res) => {
  const { username, email, password, otp } = req.body;
  const OTP = req.session.otp;

  if (otp == OTP) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      // Store hash in your password DB.
      const User = new models.user({
        username: username,
        email: email,
        password: hash,
      });
      User.save().then((user, err) => {
        if (user) {
          jwt.sign(
            { ID: user._id, username: user.username },
            process.env.SECRET,
            (err, token) => {
              if (err) {
                res.json({ user: false, status: "error" });
              } else {
                res.json({ user: token, status: "ok" });
              }
            }
          );
        } else {
          console.log(err);
        }
      });
    });
  } else {
    res.json({ status: "error" });
  }
});

app.get("/api/verifytoken", (req, res) => {
  const token = req.header("x-access-token");
  const decode = jwt.verify(token, process.env.SECRET);
  const email = decode.email;
  models.user
    .findOne({ email: email })
    .then((foundUser) => {
      res.json({ user: token, msg: "ye verify wala hai" });
    })
    .catch((err) => {
      res.json({ user: false });
    });
});

app.route("/login").post((req, res) => {
  const { email, password } = req.body;
  models.user
    .findOne({ email: email })
    .then((founduser) => {
      bcrypt.compare(password, founduser.password, (err, result) => {
        if (result) {
          jwt.sign(
            {
              ID: founduser._id,
              email: founduser.email,
              username: founduser.username,
            },
            process.env.SECRET,
            (err, token) => {
              if (err) {
                res.json({ user: false, status: "error" });
              } else {
                res.json({ user: token, status: "ok" });
              }
            }
          );
        } else {
          res.json({ status: "error", message: "wrong password" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/api/home");
  });
});
//-------------------------------------
app.listen(3001, () => {
  console.log(`server has started on 3001`);
});
