import { Request, Response } from "express";
import Logger from "../config/logger";
import { compareHashWithTextPassword } from "../util/bcrypt";
import { sign } from "jsonwebtoken";
import { findUserByEmail, findUserByUsername } from "../services/User/UserService";

interface IUserLoginDTO {
    username?: string,
    email?: string,
    password: string
}

interface IUserFindOnBank {
    id: string,
    password: string
}

const authentication = async (req: Request, res: Response) => {
    try {
        const userInfo: IUserLoginDTO = req.body;

        let user;

        if (userInfo.email) {
            user = await findUserByEmail(userInfo.email);
        } else if (userInfo.username) {
            user = await findUserByUsername(userInfo.username);
        } else {
            return res.status(403).send({
                "message": "Invalid credentials, please try again"
            })
        }

        if (!user) {
            return res.status(403).send({
                "message": "Invalid credentials, please try again"
            })
        }

        const passwordIsCurrent = await compareHashWithTextPassword(userInfo.password, user.password);

        if (!passwordIsCurrent) {
            return res.status(403).send({
                "message": "Invalid credentials, please try again"
            })
        }

        const keySecret = process.env.KEY_SECRET || "secret";

        const token = sign({
            id: user.id
        }, keySecret, { expiresIn: "24h" })

        return res.status(200).json({
            userId: user.id,
            token
        })
    } catch (error) {
        Logger.error(error);
        return res.status(500).json({
            message: "An error occurred on the server"
        })
    }
}

export default { authentication };