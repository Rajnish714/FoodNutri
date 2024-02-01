const jwt = require("jsonwebtoken");
require("dotenv").config();

function tokenGenrator(payload) {
  const { Access_Token_Payload, Ref_Token_Payload } = payload;
  console.log("ye access token h payload wala", Access_Token_Payload);
  try {
    const accessToken = jwt.sign(Access_Token_Payload, process.env.SECRET, {
      expiresIn: "15m", // Access token expiry time (15 minutes)
    });
    const refreshToken = jwt.sign(Ref_Token_Payload, process.env.SECRET, {
      expiresIn: "7d", // Refresh token expiry time (7 days)
    });
    return { refreshToken, accessToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new Error("Error generating tokens");
  }
}

module.exports = { tokenGenrator };
