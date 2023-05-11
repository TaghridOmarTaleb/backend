import mongoose from "mongoose";
const { Schema, model } = mongoose;

const imageSchema = new Schema(
  {
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "images",
    timestamps: true,
  }
);

const Image = model("Image", imageSchema);
export default Image;
