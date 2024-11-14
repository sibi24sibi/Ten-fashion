const express = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/productContrroller.js");

const router = express.Router();

// Define routes
router.post("/", createProduct); // POST /api/products
router.get("/", getProducts); // GET /api/products

module.exports = router;
