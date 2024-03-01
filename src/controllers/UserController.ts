import { Request, Response } from "express";
import IUserRequest from "../interfaces/dtos/request/IUserRequest";
import { createUser, deleteUser } from "../services/UserService";

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

const remove = async (req: Request, res: Response) => {
    try {

        const { id } = req.params

        await deleteUser(id);

        return res.status(201).json({
            message: "User deleted with success!"
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export default {
    create,
    remove
}