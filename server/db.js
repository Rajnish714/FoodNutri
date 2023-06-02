module.exports = function user(mongoose) {
  mongoose.connect("mongodb://127.0.0.1:27017/foodcalories", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const FoodSchema = new mongoose.Schema({});
  const UserSchema = new mongoose.Schema({
    username: { type: String, required: false },
    email: String,
    password: String,
  });

  models = {
    user: mongoose.model("User", UserSchema),
    Food: mongoose.model("food", FoodSchema),
  };
  return models;
};
