import rooms from '../models/room.js'

export const getAllRooms=async(req,res)=>{
    try {
        // console.log("rooms")
        const roomsList=await rooms.find();
        // console.log(roomsList)
        res.status(200).json(roomsList)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}