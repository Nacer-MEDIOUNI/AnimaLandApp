const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", registerUser); //register
router.post("/login", loginUser);

module.exports = router;
