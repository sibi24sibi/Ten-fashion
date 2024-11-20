const express = require("express");
const upload = require("../config/multer.js");
const {
  createProduct,
  getProducts,
  getProductinfo,
} = require("../controllers/productContrroller.js");
const { addToCart, getCart, deleteFromCart } = require("../controllers/cartController.js");

const router = express.Router();

// Define routes
router.post("/api/product", upload.single("images"), createProduct); // POST /api/products
router.get("/api/product/:id", getProductinfo); // POST /api/products
router.get("/api/products", getProducts); // GET /api/products

router.post("/cartItem", addToCart); // POST route for adding to cart
router.get("/cartItems", getCart); // GET route for retrieving the cart
router.delete("/cartItems", deleteFromCart); // DELETE route for removing the cart

module.exports = router;
