import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contentSchema = new Schema(
  {
    Title: {
      type: String,
    },
    content: {
        type: [String],
      },
      subtitle: {
        type: [String],
      },

    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
      },
  },
  {
    collection: "contents",

  }
);

// contentSchema.pre(["find", "findOne"], function () {
//     this.populate("image");
//   });

const Content = model("Content", contentSchema);
export default Content;
