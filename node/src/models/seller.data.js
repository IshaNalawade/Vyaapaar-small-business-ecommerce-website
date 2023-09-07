const mongoose = require("mongoose");;
const { Schema } = mongoose;

const Seller_Data_Schema = new Schema(
    {
        email : String,
        buyer_email : String,
        product : [{type : String}]
    },
    {
        timestamps: true,
    }
)

const Seller_Data = mongoose.model("Seller_Data",Seller_Data_Schema)
module.exports = Seller_Data;