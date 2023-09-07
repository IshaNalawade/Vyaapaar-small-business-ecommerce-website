import mongoose from "mongoose"

const addProductToCart=mongoose.Schema({
    productName:String,
    productType:String,
    price:String,
    imgUrl:String
});

export default mongoose.model('addProductToCart',addProductToCart)
