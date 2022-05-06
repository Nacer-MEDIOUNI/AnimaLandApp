const express = require("express");
const { isSeller, isAuth, isAdmin } = require("../middleware/authMiddleware");
const productRouter = express.Router();
const {
  getProducts,
  getSellerProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  addProduct,
} = require("../controllers/productController");

productRouter.post("/", isAuth, isSeller, addProduct);
productRouter.get("/", getProducts);
productRouter.get("/seller", isAuth, isSeller, getSellerProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.put("/:id", isAuth, isSeller, updateProduct);
productRouter.delete("/:id", isAuth, isSeller, deleteProduct);

module.exports = productRouter;
