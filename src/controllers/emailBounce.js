const UserModel = require("../models/users.model");

module.exports.emailBounce = async (req, res) => {
  try {
    const { notificationType, bounce } = req.body;
    if (notificationType === "Bounce") {
      const emailAddress = bounce["bounced Recipients"][0]["emailAddress"];
      const userObj = await UserModel.findOne({
        email: emailAddress,
      });
      if (userObj) {
        userObj.emailBounceCounter = userObj.emailBounceCounter + 1;
        await userObj.save();
      }
    }
    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ msg: error, status: false });
  }
};
