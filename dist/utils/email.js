"use strict";

var nodeMailer = require("nodemailer");
require("dotenv").config();
var transporter = nodeMailer.createTransport({
  host: process.env.AWS_SES_HOST,
  port: process.env.AWS_SES_PORT,
  secure: false,
  auth: {
    user: process.env.AWS_SES_USERNAME,
    pass: process.env.AWS_SES_SECRET_KEY
  }
});
module.exports = transporter;