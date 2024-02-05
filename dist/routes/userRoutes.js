"use strict";

var express = require("express");
var _require = require("../controllers/userController"),
  createUser = _require.createUser;
var router = express.Router();
router.post("/create-user", createUser);
// router.get("/get-user")

module.exports = router;