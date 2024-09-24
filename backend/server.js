import express from "express"
import cros from "cors"
import { connectDB } from "./config/db.js"
import prodRouter from "./routes/prodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000; // Use the PORT environment variable

//middleware
app.use(express.json())
app.use(cros())

// db connection
connectDB();

// api endpoint

app.use("/api/product",prodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})

