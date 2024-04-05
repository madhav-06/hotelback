import mongoose from "mongoose"

const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    mobile:{type:String, required:true},
    age:{type:String, required:true},
    gender:{type:String, required:true},
    bookedRooms:[{
        hotelName:{type:String, default:null},
        hotelRoom:{type:String, default:null},
        checkIn:{type:Date, default:null},
        checkOut:{type:Date, default:null},
        purpose:{type:String, default:null}
    }],
    joinedOn:{type:Date, default:Date.now}
})

export default mongoose.model("User", userSchema)