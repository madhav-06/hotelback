import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/login.js'
import mongoose from 'mongoose'

export const signUp=async (req, res) => {
    const {name, username, password, mobile, age, gender}=req.body
    // console.log(name, username, password, mobile, age, gender)
    try{
        const existinguser=await users.findOne({username})
        if(existinguser){
            return res.status(404).json({message:"User already exists"})
        }
        const hashedPassword=await bcrypt.hash(password, 12)
        const newUser=await users.create({name, username, password:hashedPassword, mobile, age, gender})
        const token=jwt.sign({username: newUser.username, id: newUser._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(200).json({result: newUser, token})
    }
    catch(error){
        res.status(500).json("Something went wrong...")
    }
}

export const login=async (req, res) => {
    const {username, password}=req.body
    // console.log(username, password)
    try{
        const existinguser=await users.findOne({username})
        if(!existinguser){
            return res.status(404).json({message:"User does'nt exists"})
        }
        const isPasswordCorrect=await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCorrect){
            // console.log("Invalid credentials")
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token=jwt.sign({username: existinguser.username, id: existinguser._id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(200).json({result: existinguser, token})
    }
    catch(error){
        res.status(500).json("Something went wrong...")
    }
}

export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    console.log(_id)
    // console.log(req.body)
    const { array, checkin, checkout, purpose } = req.body;
    console.log(array[2], array[3], checkin, checkout, purpose)
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("user unavailable...");
    }
  
    try {
    //   const updatedProfile = await users.findByIdAndUpdate(_id, { $set: { bookedRooms:{hotelName:array[2], hotelRoom:array[3], checkIn:checkin, checkOut:checkout, purpose:purpose} } }, { new: true }); // to return the updated value
    //   const updatedProfile = await users.updateOne({_id : _id}, {$push : {bookedRooms:{hotelName:array[2], hotelRoom:array[3], checkIn:checkin, checkOut:checkout, purpose:purpose}}})
      const updatedProfile = await users.findOne({_id:_id})
    //   console.log(updatedProfile)
      updatedProfile.bookedRooms.push({hotelName:array[2], hotelRoom:array[3], checkIn:checkin, checkOut:checkout, purpose:purpose})
      await updatedProfile.save()
    //   console.log(updatedProfile)
      res.status(200).json(updatedProfile);
    } catch (error) {
      res.status(405).json({ message: error.message });
    }
}