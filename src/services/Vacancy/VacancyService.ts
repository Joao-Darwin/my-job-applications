import IVacancyRequest from "../../interfaces/dtos/request/IVacancyRequest";
import Vacancy from "../../model/Vacancy";

interface IVacancyWithUserId extends IVacancyRequest {
    user?: string
}

const createVacancy = async (vacancy: IVacancyWithUserId) => {
    try {
        return await Vacancy.create(vacancy);
    } catch (error) {
        throw error;
    }
}

export {
    createVacancy
};
