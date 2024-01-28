import { config } from "dotenv";
import app from "./app";
import Logger from "./config/logger";

config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
   Logger.info(`Application runing on port ${port}`);
})