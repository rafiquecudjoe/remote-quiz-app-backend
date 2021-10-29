const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const LoginController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  const user = await UserModel.findOne({ email });

  if (user.email) {
    const hash = user.hash;

    const passCheck = await bcrypt.compare(password, hash);

    if (passCheck === true) {
      res.status(200).send("Logged in Successfully");
    } else {
      res.status(300).send("Unauthorized User");
    }
  }

  console.log(user);

  res.json({ data: user });
};

module.exports = LoginController;
