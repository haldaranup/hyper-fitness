const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;
  const isUnique = await User.findOne({ username });
  const hash = await bcrypt.hash(password, 12);
  if (!isUnique) {
    const user = await User.create({ name, username, email, password: hash });
    return res.status(201).json({
      user: user,
      result: "Successfully registered",
    });
  }
  throw Error("Username already exists!");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const name = await User.findOne({ username });
  const user = await bcrypt.compare(password, name.password);
  if (user) {
    res.json({
      result: "Successful logged in",
    });
  }
  throw Error("Something went wrong!");
};
const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.json({
    result: "Successful",
  });
};
const deleteAllUsers = async (req, res) => {
  const allUsers = await User.deleteMany();
  return res.json({
    allUsers: allUsers,
    result: "Deleted all users successfully",
  });
};

module.exports = { registerUser, deleteAllUsers, getAllUsers, login };
