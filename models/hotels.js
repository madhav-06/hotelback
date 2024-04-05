import mongoose from "mongoose"

const hotelSchema=mongoose.Schema({
    location:{type:String},
    hotels:[{
        name:String,
        rating:String,
        city:String,
        facilities:{type:[String], default:[]}
    }]
})

export default mongoose.model("Hotels", hotelSchema)