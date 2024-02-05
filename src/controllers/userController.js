const UserModel = require("../models/users.model");

module.exports.createUser = async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    console.log(name, email, password, age);
    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res
        .status(200)
        .json({ msg: "Email already exist", status: false });
    }
    const user = await UserModel.create(req.body);
    console.log(user);
    return res.status(200).json({ data: user, status: true });
  } catch (error) {
    console.log(error, "errror");
    return res.status(400).json({ error, status: false });
  }
};
