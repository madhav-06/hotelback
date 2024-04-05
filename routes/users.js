import express from 'express'
import { login, signUp, updateProfile } from '../controllers/login.js'

const router=express.Router()

router.post('/signup', signUp)
router.post('/login', login)
router.patch('/update/:id', updateProfile)

export default router