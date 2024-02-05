import { Schema, model } from "mongoose";
import IUser from "../interfaces/model/IUser";

const userSchema = new Schema<IUser>({

})

const userModel = model<IUser>("users", userSchema);

export default userModel;