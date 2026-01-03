import mongoose from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

      age: {
      type: Number,
      min: 0,
      max: 120
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"]
    },


    profileCompletion: {
      type: Number,
      default: 0
    },


},{timestamps: true});


userSchema.methods.comparePassword = function (password){
 return bcrypt.compareSync(password, this.password);
}


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

