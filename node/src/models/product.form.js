const mongoose = require("mongoose");
const { Schema } = mongoose;


const addProduct=mongoose.Schema({
    productName:String,
    productType:String,
    price:String,
    imgUrl:String
});

const addproducts = mongoose.model("addproducts", addProduct);
module.exports = addproducts;