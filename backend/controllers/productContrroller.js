const Product = require("../models/product");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const {
      productTitle,
      price,
      productDescription,
      images,
      category,
      subCategory,
    } = req.body;

    const product = new Product({
      productTitle,
      price,
      productDescription,
      images,
      category,
      subCategory,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error saving product", error });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

module.exports = { createProduct, getProducts };
