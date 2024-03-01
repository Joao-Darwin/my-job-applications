import { Router } from "express";
import UserController from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/auth";

const userRouters = Router();

userRouters.post("/", UserController.create);
userRouters.delete("/:id", AuthMiddleware, UserController.remove);

export default userRouters;