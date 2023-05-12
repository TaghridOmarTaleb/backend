import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contentSchema = new Schema(
  {
    title: String,

    content: [String],

    subtitle: [String],

    idImage: {
      type: Schema.Types.ObjectId,
      ref: "Plant",
    },
  },
  {
    collection: "contents",
  }
);

// contentSchema.pre(["find", "findOne"], function () {
//     this.populate("idImage");
//   });

const Content = model("Content", contentSchema);
export default Content;
