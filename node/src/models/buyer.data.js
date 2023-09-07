const mongoose = require("mongoose");;
const { Schema } = mongoose;

const Buyer_Data_Schema = new Schema(
    {
        email : String,
        seller_email : String,
        product : [{type : String}]
    },
    {
        timestamps: true,
    }
)

const Buyer_Data = mongoose.model("Buyer_Data",Buyer_Data_Schema)
module.exports = Buyer_Data;