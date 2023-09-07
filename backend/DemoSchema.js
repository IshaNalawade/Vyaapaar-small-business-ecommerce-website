import mongoose from "mongoose"

const imgCake=mongoose.Schema({
    imgUrl:String
});

export default mongoose.model('vyaapaar',imgCake)
