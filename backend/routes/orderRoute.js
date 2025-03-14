import express from 'express';
import { 
    placeOrder, 
    placeOrderStripe, 
    placeOrderPayPal, 
    allOrders, 
    userOrders, 
    updateStatus, 
    verifyStripe, 
    verifyPayPal 
} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/paypal', authUser, placeOrderPayPal);  // ✅ Added PayPal Order Route

// User Feature 
orderRouter.post('/userorders', authUser, userOrders);

// Verify payments
orderRouter.post('/verifyStripe', authUser, verifyStripe);
orderRouter.post('/verifyPayPal', authUser, verifyPayPal);  // ✅ Added PayPal Verification Route

export default orderRouter;
