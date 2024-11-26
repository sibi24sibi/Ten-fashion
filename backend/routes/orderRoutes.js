const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

// Order Routes
router.post("/", authMiddleware, createOrder); // Create a new order
router.get("/", authMiddleware, getUserOrders); // Get all orders for the logged-in user
router.put("/:orderId", authMiddleware, updateOrderStatus); // Update the status of an order

module.exports = router;
