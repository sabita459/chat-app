import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const PORT = process.env.Port || 3000
app.get("/",(req, res) => {
    res.send("Hello Wrold")
})

app.listen(PORT, () => {
    console.log("server is running on port "+ PORT)

})