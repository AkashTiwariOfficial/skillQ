import express from "express";
import { connectDb } from "./db/connectToDB.js";
import { ENV } from "./libs/env.js";
import { serve } from "inngest/express";
import { Inngest } from "inngest";
import { functions, inngest } from "./libs/inngest.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: ENV.ORIGIN_URL, Credentials: true
}));

app.use("/api/serve", serve({client: inngest, functions}))

app.get("/", (req, res) => {
    res.send("Helllo this is my new web app!")
})

const startServer = async () => {
    try {
        await connectDb();
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on PORT: ${ENV.PORT}`);
        });
    } catch (error) {
        console.log("Server start failed!", error);
    }
}

startServer();


