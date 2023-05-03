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
function sendermail() {
  console.log("cahl gaya");
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
    to: "vgamerix001@gmail.com",
    subject: "This msg Automated by Rajnish using gmail api nodemailer",
    text: "This is your opt : 325489",
    html: "<h1>This is your otp : 325435</h1>",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendermail };
