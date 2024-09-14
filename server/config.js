const mongoose = require("mongoose");
mongoose.connection.once("open", () => console.log("mongo is ready"));

mongoose.connection.on("end", () => console.log("mongo ended"));
async function mongoConnect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = mongoConnect;
