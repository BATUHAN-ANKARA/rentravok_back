const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    birthDate: {
      type: Schema.Types.Date,
      required: false
    },
    email: {
      type: Schema.Types.String,
      required: false
    },
    password: {
      type: Schema.Types.String,
      required: false,
      min: 4
    },
    avatar: {
      type: Schema.Types.String,
      required: false
    },
    age: {
      type: Schema.Types.Number,
      required: false
    },
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
