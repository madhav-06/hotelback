import hotels from '../models/hotels.js'

export const getAllHotels=async(req,res)=>{
    try {
        const hotelsList=await hotels.find();
        // console.log(hotelsList)
        res.status(200).json(hotelsList)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}