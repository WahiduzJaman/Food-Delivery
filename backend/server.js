import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import CartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




// app config
const app = express ()
const port = process.env.PORT || 4001;


// middleware
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads')) 

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",CartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server Started On http://localhost:${port}`)
})

//   appName=Cluster0
