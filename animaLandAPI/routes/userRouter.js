const express = require("express");
const userRouter = express.Router();
const {
  getMe,
  getSellers,
  updateMe,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { isAuth, isAdmin } = require("../middleware/authMiddleware");

userRouter.get("/me", isAuth, getMe);
userRouter.put("/me", isAuth, updateMe);
userRouter.get("/sellers", isAuth, isAdmin, getSellers);
userRouter.get("/", isAuth, getUsers);
userRouter.get("/:id", isAuth, getUser);
userRouter.put("/:id", isAuth, isAdmin, updateUser);
userRouter.delete("/:id", isAuth, isAdmin, deleteUser);
userRouter.delete("/me/:id", isAuth, deleteUser);

module.exports = userRouter;
