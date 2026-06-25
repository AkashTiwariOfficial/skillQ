import mongoose from "mongoose";
import { ENV } from "../libs/env.js";

export const connectDb = async ()  => {
    try {
       const con =  await mongoose.connect(ENV.MONGODB_URI);
            console.log("connected to MongoDB: ",con.connection.host);
    
    } catch (error) {
        console.log("connection to MongoDB failed!", error);
    }
}