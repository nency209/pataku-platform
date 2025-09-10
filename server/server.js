import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './Routes/authRoute.js'

import cors from 'cors'
const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const port=process.env.PORT
connectDB()

app.use('/api/auth',authRoutes)


app.listen(port,()=>
{
  console.log(`server is running on port http://localhost:${port}`)
})