import { Inngest } from "inngest";
import { User } from "../models/User.model.js"
import { connectDb } from "../db/connectToDB.js";

export const inngest = new Inngest({ id: "skillQ" });

const syncUser = inngest.createFunction({
    id: "sync-user",
    triggers: [{ event: "clerk/user.created" }],
    },
     async ({event}) => {
        await connectDb();

        const {id, image_url, first_name, last_name, email_addresses} = event.data;

        const newUser = {
            clerkId: id,
            email: email_addresses[0].email_address,
            name: `${first_name || ""} ${last_name || ""}`,
            profilepic: image_url
        }

        await User.create(newUser);
     }
)

const deleteUserFromDB = inngest.createFunction({
    id: "delete-user",
    triggers: [{ event: "clerk/user.deleted" }],
},
     async ({event}) => {
        await connectDb();

        const {id} = event.data;

        await User.deleteOne({ clerkId: id});
     }
)



export const functions = [
    syncUser,
    deleteUserFromDB
]