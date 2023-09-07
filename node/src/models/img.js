const mongoose = require('mongoose')
const { Schema } = mongoose;


const getImg=mongoose.Schema({
    imgUrl : String
});

const Img = mongoose.model("vyaapaars", getImg);
module.exports = Img;