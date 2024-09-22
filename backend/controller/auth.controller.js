import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    const {suername, email,password, confirmpassword, grnder } = req.body
    
    let validUser

    validUser = await User.findOne({email})

    if(validUser) {
        return res.status(400).json({
            sucess:false,
            message: "user already exit",
        })
    }
    
    if(password !== confirmpassword) {
        return res.status(400).json({
            error: "password don't match",
        })      
    }

    const hashedpassword = bcryptjs.hashSync(password,10)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
}  




export const login = (req, res) => {}

export const logout = (req, res) => {}
