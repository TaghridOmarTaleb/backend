import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ownerInfoSchema = new Schema(
  {
    address: String,
    phone: String,
    socialMedia: {
      type: String,
      enum: ["fb", "twitter", "insta"]
    }
  },
  {
    collection: "ownerInfos",
    timestamps: true,
  }
);

const OwnerInfo = model("OwnerInfo", ownerInfoSchema);

export default OwnerInfo;
