const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  fullname: {
    required: true,
    type: String,
  },
  hash: {
    required: true,
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
