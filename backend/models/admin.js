import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    adminName: {
      type: String,
      required: [true, "Please add your first name"],
      trim: true,
     
    },
   
    password: {
      type: String,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "admins",
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isLoggedIn: this.isLoggedIn },
    process.env.jwtPrivateKey
  );
  return token;
};

userSchema.methods.setIsLoggedIn = async function() {
  this.isLoggedIn = true;
  await this.save();
};

const Admin = model("Admin", adminSchema);
export default Admin;
