import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";
import VacancyController from "../controllers/Vacancy/VacancyController";

const vacancyRouters = Router();

vacancyRouters.post("/", AuthMiddleware, VacancyController.create);

export default vacancyRouters;