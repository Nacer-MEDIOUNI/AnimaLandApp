const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
    cover_photo: {
      url: { type: String },
      public_id: { type: String },
    },
    isAdmin: { type: Boolean, default: false },
    isSeller: { type: Boolean, default: false },
    seller: {
      name: String,
      logo: String,
      description: String,
      rating: { type: Number },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
