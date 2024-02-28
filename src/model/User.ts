import { Schema, model } from "mongoose";
import IUser from "../interfaces/model/IUser";
import { randomUUID } from "crypto";

const userSchema = new Schema<IUser>({
    _id: {
        type: String,
        default: () => randomUUID()
    },
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
    },
    vagas: [{
        type: Schema.Types.UUID, 
        ref: 'Vancancy'
    }]
})

const User = model<IUser>("users", userSchema);

export default User;