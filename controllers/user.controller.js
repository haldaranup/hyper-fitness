const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  let user = await User.findOne({ username });
  if (user) {
    return res.status(400).json({ error: "Username already exists" });
  }
  const hash = await bcrypt.hash(password, 12);
  user = await User.create({ name, username, email, password: hash });
  return res.status(201).json({
    user: user,
    result: "Successfully registered",
  });
};
const login = async (req, res) => {
  const { username, password } = req.body;
  const name = await User.findOne({ username });
  const user = await bcrypt.compare(password, name.password);
  if (user) {
    return res.json({
      result: "Successful logged in",
    });
  }
  return res.status(400).json({ error: "Username already exists" });
};
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json({
    allusers: allUsers,
    result: "Successful",
  });
};

module.exports = { registerUser, getAllUsers, login };
