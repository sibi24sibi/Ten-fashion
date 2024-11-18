const Cart = require("../models/cart");
const Product = require("../models/product");

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne();

    if (!cart) {
      // If no cart exists, create a new one
      cart = new Cart({
        products: [{ productId, quantity }],
      });
    } else {
      // If cart exists, check if the product is already in the cart
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex === -1) {
        // If product not in cart, add it
        cart.products.push({ productId, quantity });
      } else {
        // If product exists in cart, update quantity
        cart.products[productIndex].quantity += quantity;
      }
    }

    // Save the updated cart
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

const getCart = async (req, res) => {
  try {
    // Find the cart and populate the product information
    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving cart", error });
  }
};

module.exports = { addToCart, getCart };
