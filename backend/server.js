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
app.get("/",(req, res) => {
    res.send("Hello Wrold")
})

app.listen(PORT, () => {
    console.log("server is running on port "+ PORT)

})