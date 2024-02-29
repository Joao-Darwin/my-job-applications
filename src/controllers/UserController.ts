import { Request, Response } from "express";
import IUserRequest from "../interfaces/dtos/request/IUserRequest";
import { createUser } from "../services/UserService";

const create = async (req: Request, res: Response) => {
    try {
        const user: IUserRequest = req.body;

        const response = await createUser(user);

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export default {
    create
}