const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { getToken } = require("../middleware/authMiddleware");

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  res.status(200).send(req.user);
};

// @desc    Get sellers data
// @route   GET /api/users/seed
// @access  Public
const getSellers = async (req, res) => {
  const sellers = await User.find({ isSeller: true });
  res.send(sellers);
};

// @desc    Update User data
// @route   PUT /api/users/me/:id
// @access  Private
const updateMe = async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.image = req.body.image || user.image;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password, 8);
    }
    if (user.isSeller) {
      user.seller.name = req.body.seller.name;
      user.seller.logo = req.body.seller.logo;
      user.seller.description = req.body.seller.description;
    }
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
      isAdmin: updatedUser.isAdmin,
      isSeller: updatedUser.isSeller,
      token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
};

/* admin */
// @desc    Get all Users data
// @route   GET /api/users/
// @access  Public
const getUsers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};

// @desc    Get  User data
// @route   GET /api/users/:id
// @access  Public
const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User Not Found!" });
  }
};

// @desc    Update User data
// @route   PUT /api/users/:id
// @access  Private
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.isAdmin = req.body.isAdmin;
    user.isSeller = req.body.isSeller;
    const updatedUser = await user.save();
    if (updatedUser) {
      return res
        .status(200)
        .send({ message: "User Updated", data: updatedUser });
    }
  }
  return res.status(500).send({ message: " Error in Updating User." });
};

// @desc    Delete all User data
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = async (req, res) => {
  const deletedUser = await User.findById(req.params.id);
  if (deletedUser) {
    await deletedUser.remove();
    res.send({ message: "User Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
};

module.exports = {
  getMe,
  getSellers,
  updateMe,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
