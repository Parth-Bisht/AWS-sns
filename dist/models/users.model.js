"use strict";

var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  emailBounceCounter: {
    type: Number,
    require: false,
    "default": 0
  },
  isVerified: {
    type: Boolean,
    require: false,
    "default": false
  }
});
var UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;