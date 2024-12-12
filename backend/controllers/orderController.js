import crypto from 'crypto';
import Razorpay from 'razorpay';
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModels.js';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  
  console.log("Received request to place order");
  
  try {
    // Validate the user
    const user = await userModel.findById(req.user.id);
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    // Create new order in the database
    const newOrder = new orderModel({
      userId: req.user.id,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    console.log("Order saved to database", newOrder);

    // Create Razorpay order
    const options = {
      amount: req.body.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: newOrder._id.toString(),
    };

    const order = await razorpay.orders.create(options);
    console.log("Razorpay order created", order);

    // Respond with Razorpay order details
    res.json({
      success: true,
      orderId: newOrder._id,
      razorpayOrderId: order.id,
      amount: req.body.amount,
      currency: "INR",
    });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Verification of Razorpay payment
const verifyPayment = async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    // Fetch the Razorpay order
    const order = await razorpay.orders.fetch(razorpayOrderId);
    
    // Generate the signature
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpayOrderId + "|" + razorpayPaymentId);
    const generatedSignature = hmac.digest('hex');
    
    // Verify the signature
    if (generatedSignature === razorpaySignature) {
      // Payment is successful, now update the order status
      const updatedOrder = await orderModel.findByIdAndUpdate(
        order.receipt, // Receipt is stored as order ID
        { status: 'paid', payment: true },
        { new: true }
      );
      console.log('Order successfully updated:', updatedOrder);
      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

export { placeOrder, verifyPayment };
