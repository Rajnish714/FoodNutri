const auth = (req, res, next) => {
  req.msg = "aa gaya msg";
  console.log("aa gaya");

  // const token = req.header("x-access-token");
  // const decode = jwt.verify(token, process.env.SECRET);
  // req.email = decode.email;
  next();
};

// const refresh_token=(req, res, next) => {
//     const refreshtoken = req.cookies.refresh_token;
//     if (refreshtoken) {
//       const accessToken = jwt.sign({user: true}, process.env.SECRET, {
//         expiresIn: "15m",
//       });
//       res.json({
//         access_token: accessToken,
//       });
//     } else {
//       res.json({
//         access_token: null,
//       });
//     }
//     next();
//   }
module.exports = auth;
