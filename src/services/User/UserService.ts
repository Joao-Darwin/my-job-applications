import IUserRequest from "../../interfaces/dtos/request/IUserRequest";
import User from "../../model/User";
import { createHashPassword } from "../../util/bcrypt";

const userProjection = {
    _id: true,
    name: true,
    username: true,
    email: true,
    avatar: true
};

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
        return await User.findById(userId, userProjection);
    } catch (error) {
        throw error
    }
}

const findUserByEmail = async (email: string) => {
    try {
        return await User.findOne({
            email: email
        }, {
            _id: true,
            password: true
        })
    } catch (error) {
        throw error
    }
}

const findUserByUsername = async (username: string) => {
    try {
        return await User.findOne({
            username: username
        }, {
            _id: true,
            password: true
        })
    } catch (error) {
        throw error
    }
}

const updateUser = async (id: string, userUpdated: IUserRequest) => {
    try {
        let user = await User.findById(id, userProjection);

        if (!user) {
            throw "User don't find!";
        }

        user.name = userUpdated.name;
        user.username = userUpdated.username;
        user.email = userUpdated.email;
        user.avatar = userUpdated.avatar;
        if (userUpdated.password) {
            user.password = await createHashPassword(userUpdated.password);
        }

        await user.save();

        return user;
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

export { createUser, findUserById, findUserByEmail, findUserByUsername, updateUser, deleteUser };