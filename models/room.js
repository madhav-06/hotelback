import mongoose from "mongoose"

const roomSchema=mongoose.Schema({
    hotelName:{type:String},
    rooms:[{
        roomType:String,
        capacity:String,
        price:String,
        availability:String,
        description:String,
        services:{type:[String], default:[]}
    }]
})

export default mongoose.model("Rooms", roomSchema)