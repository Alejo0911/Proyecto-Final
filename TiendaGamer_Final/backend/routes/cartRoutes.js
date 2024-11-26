
const express = require('express');
const router = express.Router();
const Cart = require('./models/Cart');

// Añadir un producto al carrito
router.post('/cart', async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = new Cart({ userId, productId, quantity });
    await cartItem.save();
    res.status(201).send(cartItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener los productos del carrito por usuario
router.get('/cart/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await Cart.find({ userId }).populate('productId');
    res.status(200).send(cartItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
