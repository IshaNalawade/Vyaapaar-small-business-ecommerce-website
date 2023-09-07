import mongoose from "mongoose"

const addProduct=mongoose.Schema({
    productName:String,
    productType:String,
    price:String,
    imgUrl:String
});

export default mongoose.model('addProduct',addProduct)
