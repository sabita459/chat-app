import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MANGO_URI).then(()=>{
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log(err) 

})



const app = express()

const PORT = process.env.Port || 3000
app.use(express.json())

app.get("/",(req, res) => {
    res.send("Hello Wrold")
})

// import routes
import authRoutes from "./routes/auth.routes.js"

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on port "+ PORT)

})
