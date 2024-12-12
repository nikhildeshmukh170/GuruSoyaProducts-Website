import express from 'express';
import { placeOrder } from '../controllers/orderController.js';
import { verifyPayment } from '../controllers/orderController.js'; // Import the verifyPayment function
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/place', authMiddleware, placeOrder);  // Place order route
router.post('/verify', authMiddleware, verifyPayment);  // Payment verification route

export default router;
