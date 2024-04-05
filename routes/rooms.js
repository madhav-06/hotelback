import express from 'express'
import { getAllRooms } from '../controllers/room.js'

const router=express.Router()

router.get('/get', getAllRooms)

export default router