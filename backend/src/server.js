import express from "express";
import { connectDb } from "./db/connectToDB.js";
import { ENV } from "./libs/env.js";

const app = express();


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


