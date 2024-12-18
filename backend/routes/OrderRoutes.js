// routes/orderRoutes.js
const express = require('express');
const { createOrder } = require('../controllers/OrderController');
// const{deleteOrder}=require('../controllers/OrderController');
const authMiddleware = require('../middleware2'); // Import your authentication middleware
const router = express.Router();

// Use the middleware to authenticate the user
router.post('/createOrder', authMiddleware, createOrder);
// router.delete("/delete", authMiddleware, deleteOrder);

module.exports = router;
