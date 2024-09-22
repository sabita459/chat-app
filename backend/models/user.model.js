import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
     username:{
        type: String,
        required: true,
        unique: true,
    },
    email: {
        tpye: String,
        required: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type:String,
        required: true,
        enum: ["male","female"],
    },
    profilepic: {
        type: String,
        default: "",
    },

},
    {timestamps: true }

)
const User = mongoose.model("User", userSchema)

export default User