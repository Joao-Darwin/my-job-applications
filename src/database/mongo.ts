import mongoose from "mongoose";
import Logger from "../config/logger";
import { config } from "dotenv";

config();
const URI = process.env.MONGO_URI;

function connectToMongoDb(): void {
    if (URI) {
        mongoose.connect(URI)
        .then(() => {
            Logger.info("Connected to mongo db successfully");
        })
        .catch((error => {
            Logger.error(error);
        }))
    } else {
        Logger.warn("Mongo URI is not defined on environment variables");
    }
}

export default connectToMongoDb;