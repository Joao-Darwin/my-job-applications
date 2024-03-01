import cors from 'cors';
import express from 'express';
import userRouters from '../routers/UserRouters';
import vancancyRouters from '../routers/VancancyRouters';
import authRouters from '../routers/AuthRouters';

const app = express();

app.use(cors());
app.use(express.json());

const basePathUrlApi = "/api";

app.use(`${basePathUrlApi}/auth`, authRouters);
app.use(`${basePathUrlApi}/users`, userRouters);
app.use(`${basePathUrlApi}/vancancies`, vancancyRouters);

export default app;