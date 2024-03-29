const UserModel = require("../models/users.model");

module.exports.emailBounce = async (req, res) => {
  console.log(req.body, "Webhook");
  console.log("Outside Try Block");
  try {
    console.log("Inside Try Block");
    console.log("Webhook body", req.body);
    const test = req.body;
    const { notificationType, bounce } = req.body;
    console.log(notificationType, bounce);
    if (notificationType === "Bounce") {
      const emailAddress = bounce["bounced Recipients"][0]["emailAddress"];
      const userObj = await UserModel.findOne({
        email: emailAddress,
      });
      console.log(userObj);
      if (userObj) {
        userObj.emailBounceCounter = userObj.emailBounceCounter + 1;
        await userObj.save();
      }
    }
    return res.status(200).json({ data: test, notificationType, bounce });
  } catch (error) {
    console.log("Inside error block");
    console.log(error);
    return res.status(400).json({ msg: error, status: false });
  }
};
