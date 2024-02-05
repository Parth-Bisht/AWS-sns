"use strict";

var mongoose = require("mongoose");
require("dotenv").config();
var connection = mongoose.connect(process.env.MONGO_DB_URI);
module.exports = connection;