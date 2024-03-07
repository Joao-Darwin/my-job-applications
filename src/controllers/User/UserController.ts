import { Request, Response } from "express";
import IUserRequest from "../../interfaces/dtos/request/IUserRequest";
import { createUser, deleteUser, findUserById, updateUser } from "../../services/User/UserService";

const create = async (req: Request, res: Response) => {
    try {
        const user: IUserRequest = req.body;

        const response = await createUser(user);

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

const findById = async (req: Request, res: Response) => {
    try {
        const { userId } = req;

        if (userId) {
            const user = await findUserById(userId);

            return res.status(200).json(user);
        } else {
            return res.status(400).send();
        }
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

const update = async (req: Request, res: Response) => {
    try {
        const { userId } = req;
        let user: IUserRequest = req.body;

        user = await updateUser(userId, user);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        let user: IUserRequest = req.body;

        user = await updateUser(id, user);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred on the server"
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
            message: "An error occurred on the server"
        })
    }
}

export default {
    create,
    findById,
    update,
    updateById,
    remove
}