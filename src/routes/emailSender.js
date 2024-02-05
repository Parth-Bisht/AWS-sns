const express = require("express");
const { emailSender } = require("../controllers/emailSender");
const { emailBounce } = require("../controllers/emailBounce");
const router = express.Router();

router.post("/send-mail", emailSender);
router.post("/email-bounce", emailBounce);

module.exports = router;
