import mongoose from "mongoose";
const { Schema, model } = mongoose;

const messageSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please add your username"],
      trim: true,
      maxlength: [30, "The username cannot be more than 30 characters"],
      minlength: [5, "The username cannot be less than 5 characters"],
    },
    message: {
      type: String,
      required: [true, "Please add a message"],
      maxlength: [500, "The message cannot be more than 500 characters"],
      minlength: [2, "The message cannot be less than 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please add a valid email address"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    // viewedBy: {
    //   type: [String],
    //   default: [],
    // },
    
  },
  

  {
    collection: "messages",
    timestamps: true,

  }
);



messageSchema.path('message').validate(function (value) {
    return value.trim().length > 0;
  }, 'Message cannot be empty');
  
  
//   messageSchema.pre('save', function (next) {
//     if (this.isNew || this.isModified('message')) {
//       this.viewedBy = [];
//     }
//     next();
//   });
  
  
  

const Message = model("Message", messageSchema);
export default Message;
