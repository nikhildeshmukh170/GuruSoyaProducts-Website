import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gurusoyaproducts:zxcvbnm9022671564@cluster0.cg4n1mn.mongodb.net/guru-soya-products').then(()=>console.log("DB connected"));
}