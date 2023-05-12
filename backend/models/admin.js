import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;

const adminSchema = new Schema(
  {
    adminName: {
      type: String,
      required: [true, "Please add your first name"],
      trim: true,
      unique: true,
     
    },
   
    password: {
      type: String,
      required: [true, "Please add your password"],
      trim: true,
    },
  },
  {
    collection: "admins",
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id },
    process.env.jwtPrivateKey
  );
  return token;
};

const Admin = model("Admin", adminSchema);
export default Admin;
