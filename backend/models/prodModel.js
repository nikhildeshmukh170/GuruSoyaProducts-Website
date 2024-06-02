import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    discription: { type: String, required: true },
    price: {type:Number,required:true},
    image:{type:String,required:true},
    weight:{type:Number,required:true}
})

const prodModel = mongoose.models.product || mongoose.model("product",prodSchema);

export default prodModel;
