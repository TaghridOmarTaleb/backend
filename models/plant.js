import mongoose from "mongoose";
const { Schema, model } = mongoose;

const plantSchema = new Schema(
  {
    title: {
      type: String,
      // required: [true, "Please add the title"],
    },
    image: {
      type: String,
      // required: [true, "Please add the image URL"],
    },
    description: {
      type: String,
      // minlength: [20, "Description should be at least 20 characters long"],
    },
    price: {
      type: Number,
      // required: [true, "Please add the price"],
      // min: [0, "Price cannot be negative"],
      // get: (v) => Math.round(v), //for old products (read value)
      // set: (v) => Math.round(v), // set value
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["indoor", "outdoor"],
      // required: [true, "Please add a category"],
    },
    like: {
      type: Boolean,
      default: false,
    },
    fav: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "plants",
    timestamps: true,
  }
);

const Plant = model("Plant", plantSchema);
export default Plant;
