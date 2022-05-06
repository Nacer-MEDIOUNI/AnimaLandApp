const Product = require("../models/productModel.js");
const multer = require("multer");

const shopTypes = ["animal", "supplies"];
const animalCategories = ["cat", "dog"];
const suppliesCategories = [
  "toys",
  "healthcare",
  "beds",
  "clothing & accessories",
];

// @desc    Add product
// @route   GET /api/products/
// @access  Private
const addProduct = async (req, res) => {
  const { type, category, price, countInStock } = req.body;
  if (!shopTypes.includes(type)) {
    res.status(400);
    return res.send("this type is not included in our shopList");
  }
  if (
    !animalCategories.includes(category) &&
    !suppliesCategories.includes(category)
  ) {
    res.status(400);
    return res.send("this category is not included in our shopList");
  }
  if (price < 0) {
    res.status(400);
    return res.send("Please add price");
  }
  if (countInStock < 0) {
    res.status(400);
    return res.send("Stock count should be positive ");
  }

  const product = new Product({ ...req.body, seller: req.user._id }); //? add product with id
  const createdProduct = await product.save();

  if (createdProduct) {
    return res.status(200).send("Product Created");
  }
  return res.status(500).send("Error in Creating Product");
};

// @desc    Get all product
// @route   GET /api/products/
// @access  Public
const getProducts = async (req, res) => {
  const products = await Product.find({}).populate(
    "seller",
    "seller.name seller.logo"
  );
  res.send(products);
};

// @desc    Get my product if I am a seller
// @route   GET /api/products/seller
// @access  Private
const getSellerProduct = async (req, res) => {
  const products = await Product.find({ seller: req.user._id });
  res.send(products);
};

// @desc    Get one product by id if I am a user (client)
// @route   GET /api/products/:id
// @access  Public
const getSingleProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id }).populate(
    "seller",
    "_id seller.name seller.logo seller.rating"
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send("Product Not Found!");
  }
};

// @desc    Update product
// @route   GET /api/products
// @access  Public
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.type = req.body.type;
    product.category = req.body.category;
    product.price = req.body.price;
    product.image = req.body.image;
    product.video = req.body.video;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res.send("Product Updated!");
    }
  }
  return res.status(500).send(" Error in Updating Product!");
};

// @desc    Delete product
// @route   GET /api/products
// @access  Public
const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send("Product Deleted!");
  } else {
    res.send("Error in Deletion!");
  }
};

module.exports = {
  getProducts,
  getSellerProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  addProduct,
};
