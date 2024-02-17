const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 3,
        max: 40,
      
      },
      age: {
        type: String,
        required: true
        

      },
      country: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 8
      },
      email: {
        type: String,
        required: true,
        min: 3,
        max: 40,
        unique: true,
      }
    

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel