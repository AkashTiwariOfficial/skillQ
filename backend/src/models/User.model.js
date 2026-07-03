import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    clerkId: {
        type: String,
        unique: true,
        required: true
    },
    profilepic: {
        type: String,
        default: ""
    }
}, { timestamps: true } );

export const User = mongoose.model("User", userSchema);