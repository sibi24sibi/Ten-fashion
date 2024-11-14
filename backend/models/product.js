const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productDescription: String,
    images: String,
    category: String,
    subCategory: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
