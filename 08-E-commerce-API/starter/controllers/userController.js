const User = require("../model/User");
const CustomError = require("../errors");
const StatusCodes = require("http-status-codes");

const getAllUsers = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: "user" }).select("-password");

  res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById({ _id: id }).select("-password");

  if (!user) {
    throw new CustomError.NotFoundError(`No User with id : ${id}`);
  }

  res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
  res.send("show current user route");
};
const updateUser = async (req, res) => {
  res.send("update user route");
};
const updateUserPassword = async (req, res) => {
  res.send("update user password route");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUserPassword,
  updateUser,
};
