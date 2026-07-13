import { getAuth } from '@clerk/express';
import { User } from "../models/User.model.js";
import { ApiErrors } from "../utils/ApiErrors.js";


export const protectRoute = [
    getAuth(),
    async(req, res, next) => {
       try {
         const clerkId = req.auth().userId;
         
          if (!clerkId) {
            throw new ApiErrors(401, "Unauthorized request");
          }
 
          const user = await User.findOne({clerkId});
 
          if(!user){
             throw new ApiErrors(404, "user not found");
          }
 
          req.user = user;
 
          next();
       } catch (error) {
        throw new ApiErrors(500, "Internal Server Error");
       }
    }
    
]
