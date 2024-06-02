import prodModel from "../models/ProdModel.js";
import fs from 'fs'

// add prod item

const addProd = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const product  = new prodModel({
        name:req.body.name,
        discription:req.body.description,
        price:req.body.price,
        weight:req.body.weight,
        category:req.body.category,
        image:image_filename
    })

    try {
        await product.save();
        res.json({success:true,message:"Product Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

// all product list
const listProduct = async(req,res) => {
    try {
        const products = await prodModel.find({})
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}

// remove product item

const removeProd = async(req,res) => {
    try {
        const products = await prodModel.findById(req.body.id);
        fs.unlink(`uploads/${products.image}`,() => {})

        await prodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }

}
export {addProd, listProduct, removeProd}