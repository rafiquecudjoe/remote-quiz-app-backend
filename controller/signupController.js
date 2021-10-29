const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const SignupController = async (req, res) => {
  const { email, fullname, password } = req.body;

  const hash = await bcrypt.hash(password, saltRounds);

  const user = new UserModel({ email, fullname, hash });

  const saved = await user.save();

  if (saved) {
    res.status(200).json({ message: "User saved Successfully", data: saved });
  }
};

module.exports = SignupController;
