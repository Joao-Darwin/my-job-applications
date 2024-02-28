import IUser from "./IUser";

interface IVacancy {
    _id: string,
    companyName: string;
    remuneration: number;
    status: "open" | "closed" | "pending";
    candidatureDate: Date;
    lastContact: Date;
    user: IUser;
}

export default IVacancy;