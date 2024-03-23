import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";
import VacancyController from "../controllers/Vacancy/VacancyController";

const vacancyRouters = Router();

vacancyRouters.post("/", AuthMiddleware, VacancyController.create);
vacancyRouters.get("/", AuthMiddleware, VacancyController.findVacancyFromUser);
vacancyRouters.put("/:id", AuthMiddleware, VacancyController.updateVacancy);
vacancyRouters.delete("/:id", AuthMiddleware, VacancyController.deleteVacancy);

export default vacancyRouters;