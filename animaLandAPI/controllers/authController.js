const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { getToken } = require("../middleware/authMiddleware");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password, description, isSeller } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    return res.send("Please add all fields");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    return res.send("User already exists");
  }
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create user
  const user = await User.create({
    name,
    email,
    isSeller,
    password: hashedPassword,
  });
  user.cover_photo.url = `https://cdn-expa.aiesec.org/gis-img/missing_profile_${name
    .charAt(0)
    .toLowerCase()}.svg`;

  if (isSeller) {
    user.seller.name = name;
    user.seller.description = description;
  }
  user.save();

  if (user) {
    res.status(201).send({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    return res.send("Invalid user data");
  }
};

// @desc    Authenticate a user, Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.send({
      _id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
      token: getToken(user._id),
    });
  } else {
    res.status(400).send("Invalid User or Password!");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
