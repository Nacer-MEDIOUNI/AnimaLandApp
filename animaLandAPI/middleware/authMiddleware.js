const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Generate JWT
const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

const isAuth = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          const user = await User.findById(decode._id).select("-password");
          req.user = user;
          next();
        }
      });
    } else {
      res.status(401).send({ message: "No Token" });
    }
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: "Invalid Admin Token" });
};

const isSeller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    return next();
  }
  return res.status(401).send({ message: "Invalid Seller Token" });
};

module.exports = { getToken, isAuth, isAdmin, isSeller };
