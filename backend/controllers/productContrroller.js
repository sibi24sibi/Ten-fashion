const Product = require("../models/product");

// Create a new product
const createProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const products = Array.isArray(req.body) ? req.body : [req.body];

    const productsWithImage = products.map((product) => ({
      ...product,
      images: req.file.path,
    }));

    const createdProducts = await Product.insertMany(productsWithImage);

    res.status(201).json(createdProducts);
  } catch (error) {
    console.error(error);
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
