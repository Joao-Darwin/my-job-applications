import IUserRequest from "../interfaces/dtos/request/IUserRequest";
import User from "../model/User";

const createUser = async (user: IUserRequest) => {
    try {
        return await User.create(user);
    } catch (error) {
        throw error;
    }
}

export { createUser };