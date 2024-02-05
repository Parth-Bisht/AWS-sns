"use strict";

var express = require("express");
var _require = require("../controllers/emailSender"),
  emailSender = _require.emailSender;
var _require2 = require("../controllers/emailBounce"),
  emailBounce = _require2.emailBounce;
var router = express.Router();
router.post("/send-mail", emailSender);
router.post("/email-bounce", emailBounce);
module.exports = router;