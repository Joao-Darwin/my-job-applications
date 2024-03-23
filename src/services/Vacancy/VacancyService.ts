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

const updateVacancyService = async (vacancyUpdate: IVacancyRequest, vacancyIdToUpdate: string) => {
    try {
        let vacancy = await Vacancy.findById(vacancyIdToUpdate, vacancyByIdProjection);

        if (!vacancy) {
            throw "Vacancy don't find!";
        }

        vacancy.companyName = vacancyUpdate.companyName;
        vacancy.remuneration = vacancyUpdate.remuneration;
        vacancy.status = vacancyUpdate.status;
        vacancy.lastContact = vacancyUpdate.lastContact;

        return await vacancy.save();
    } catch (error) {
        throw error;
    }
}

export {
    createVacancy,
    findVacancyFromUserService,
    updateVacancyService
};
