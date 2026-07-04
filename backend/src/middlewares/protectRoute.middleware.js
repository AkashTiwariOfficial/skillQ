import { getAuth } from '@clerk/express';
import { User } from "../models/User.model.js";


export const protectRoute = [
    getAuth(),
    
]
