const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const { USER } = process.env;
const { CLIENT_ID } = process.env;
const { CLIENT_SECRET } = process.env;
const { REDIRECT_URI } = process.env;
const { REFRESH_TOKEN } = process.env;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});
function sendermail(username,email,otp) {

  const accessToken = oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: USER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: USER,
    to: email,
    subject: `FoodNutri Verification `,
    text: `Dear ${username}, your OTP is : ${otp}`,
    html: `<h1>Dear ${username}, your OTP is : ${otp}</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      console.log(info);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendermail };
