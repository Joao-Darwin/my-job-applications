import { randomUUID } from "crypto";
import { Schema, model } from "mongoose";
import IVacancy from "../interfaces/model/IVancancy";

const vancancySchema = new Schema<IVacancy>({
    _id: {
        type: String,
        default: () => randomUUID()
    },
    companyName: {
        type: String,
        required: true
    },
    remuneration: {
        type: Number,
        default: 0.00
    },
    status: {
        type: String,
        default: "open"
    },
    candidatureDate: {
        type: Date,
        default: Date.now
    },
    lastContact: {
        type: Date
    },
    user: {
        type: Schema.Types.UUID,
        ref: 'User'
    }
})

const Vancancy = model<IVacancy>("Vancancy", vancancySchema);

export default Vancancy;
