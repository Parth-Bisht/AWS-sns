const UserModel = require("../models/users.model");
// const { transporter } = require("../utils/email");
const nodeMailer = require("nodemailer");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
  host: process.env.AWS_SES_HOST,
  port: process.env.AWS_SES_PORT,
  secure: true,
  auth: {
    user: process.env.AWS_SES_USERNAME,
    pass: process.env.AWS_SES_SECRET_KEY,
  },
});

module.exports.emailSender = async (req, res) => {
  console.log(req.body, "REQ BODY");
  try {
    const { email } = req.body;
    console.log(req.body, "REQ BODY 2");
    console.log(email, "EMAIL");
    const response = {
      status: false,
      info: null,
    };
    const userObj = await UserModel.findOne({ email });
    if (userObj && userObj.emailBounceCounter < 3) {
      console.log(userObj, "USEROBJ");
      const info = await transporter.sendMail({
        from: process.env.AWS_SES_FROM_ADDRESS, // Sender address, this could be SES verified identity
        to: email, // Receivers email address
        subject: "Test Subject", // Subject line
        text: "Hello world?", // Plain text body
        html: "<b>Hello world?</b>", // HTML body
      });
      console.log(info, "INFO");
      response.status = true;
      response.info = info;
    }
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: error, status: false });
  }
};
