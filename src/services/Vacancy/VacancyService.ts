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
        let vacancyCreated = await Vacancy.create(vacancy);

        let vacancyToReturn = {
            id: vacancyCreated.id,
            companyName: vacancyCreated.companyName,
            remuneration: vacancyCreated.remuneration,
            status: vacancyCreated.status,
            candidatureDate: vacancyCreated.candidatureDate,
            lastContact: vacancyCreated.lastContact
        };

        return vacancyToReturn;
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

const findVacancyByIdService = async (vacancyId: string) => {
    try {
        return await Vacancy.findById(vacancyId, vacancyByIdProjection);
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

const deleteVacancyService = async (vacancyId: string) => {
    try {
        await Vacancy.deleteOne({_id: vacancyId});
    } catch (error) {
        throw error;
    }
}

export {
    createVacancy,
    findVacancyFromUserService,
    findVacancyByIdService,
    updateVacancyService,
    deleteVacancyService
};
