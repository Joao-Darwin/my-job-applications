import IUserRequest from "../../interfaces/dtos/request/IUserRequest";
import User from "../../model/User";
import { createHashPassword } from "../../util/bcrypt";

const createUser = async (user: IUserRequest) => {
    try {
        user.password = await createHashPassword(user.password);

        return await User.create(user);
    } catch (error) {
        throw error;
    }
}

const findUserById = async (userId: string | string[]) => {
    try {
        return await User.findById(userId);
    } catch (error) {
        throw error
    }
}

const deleteUser = async (id: String) => {
    try {
        const user = await User.findById(id);

        if (user) {
            await user.deleteOne();
        } else {
            throw "User not found!"
        }
    } catch (error) {
        throw error;
    }
}

export { createUser, findUserById, deleteUser };