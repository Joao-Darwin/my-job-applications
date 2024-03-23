import { Request, Response } from "express";
import IVacancyRequest from "../../interfaces/dtos/request/IVacancyRequest";
import { createVacancy, findVacancyFromUserService } from "../../services/Vacancy/VacancyService";

interface IVacancyWithUserId extends IVacancyRequest {
    user?: string
}

const create = async (req: Request, res: Response) => {
    try {
        let vacancy: IVacancyWithUserId = req.body;
        vacancy.user = req.userId;

        const response = await createVacancy(vacancy);

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

const findVacancyFromUser = async (req: Request, res: Response) => {
    try {
        let user = req.userId;

        const response = await findVacancyFromUserService(user);

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

export default {
    create,
    findVacancyFromUser
}