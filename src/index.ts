import { config } from "dotenv";
import app from "./app";
import Logger from "./config/logger";
import connectToMongoDb from "./database/mongo";

config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
   connectToMongoDb();
   Logger.info(`Application runing on port ${port}`);
})