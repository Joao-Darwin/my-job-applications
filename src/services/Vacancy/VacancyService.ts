import IVacancyRequest from "../../interfaces/dtos/request/IVacancyRequest";
import Vacancy from "../../model/Vacancy";

interface IVacancyWithUserId extends IVacancyRequest {
    user?: string
}

const vacancyByIdProjection = {
    _id: true,
    companyName: true,
    remuneration: true,
    status: true,
    candidatureDate: true,
    lastContact: true
};

const vacancyAllProjection = {
    _id: true,
    companyName: true,
    remuneration: true
};

const createVacancy = async (vacancy: IVacancyWithUserId) => {
    try {
        return await Vacancy.create(vacancy);
    } catch (error) {
        throw error;
    }
}

const findVacancyFromUserService = async (userId: string) => {
    try {
        return await Vacancy.find({user: userId}, vacancyAllProjection);
    } catch (error) {
        throw error;
    }
}

export {
    createVacancy,
    findVacancyFromUserService
};
