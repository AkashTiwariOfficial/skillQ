import dotenv from "dotenv";

dotenv.config({ quiet: true});

export const ENV ={
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    ORIGIN_URL: process.env.ORIGIN_URL,
    INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    ORIGIN_URL: process.env.ORIGIN_URL
};