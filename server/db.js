

module.exports= function user(mongoose){


const FoodSchema = new mongoose.Schema({});
const UserSchema = new mongoose.Schema({
    username: { type: String, required: false }, 
    email:String,
    password:String
  })
   

 models={
  user : mongoose.model("User",UserSchema),
  Food : mongoose.model("food",FoodSchema)
}
 return models
}
