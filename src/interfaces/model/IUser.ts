import IVacancy from "./IVancancy";

interface IUser {
    _id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    avatar: string,
    created_at: Date,
    updated_at: Date
    vagas: IVacancy[]
}

export default IUser;