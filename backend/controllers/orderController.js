import orderModel from "../models/orderModel.js";
import userModel from "../models/userModels.js";
import Razorpay from "razorpay";

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

export { placeOrder };
