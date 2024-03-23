interface IVacancyRequest {
    companyName: string;
    remuneration: number;
    status: "open" | "closed" | "pending";
    candidatureDate: Date;
    lastContact: Date;
}

export default IVacancyRequest;