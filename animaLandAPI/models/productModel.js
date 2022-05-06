const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: { type: String }, //? animal or supplies
    category: { type: String },
    price: { type: Number, default: 0 },
    image: { type: String },
    video: { type: String }, //? 
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    countInStock: { type: Number, default: 0 },
    description: { type: String },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
