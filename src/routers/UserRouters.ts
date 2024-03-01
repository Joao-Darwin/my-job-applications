import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouters = Router();

userRouters.post("/", UserController.create);
userRouters.delete("/:id", UserController.remove);

export default userRouters;