import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import hotelRoutes from './routes/hotels.js'
import roomRoutes from './routes/rooms.js'

const app=express()
dotenv.config()

app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/users', userRoutes)
app.use('/hotels', hotelRoutes)
app.use('/rooms',roomRoutes)

const PORT=process.env.PORT || 5000

const DATABASE_URL=process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
        .catch((err)=>{console.log(err.message)})

export default app