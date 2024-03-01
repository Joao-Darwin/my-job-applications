import { Router } from "express";
import UserController from "../controllers/User/UserController";
import { AuthMiddleware } from "../middlewares/auth";

const userRouters = Router();

userRouters.post("/", UserController.create);
userRouters.get("/", AuthMiddleware, UserController.findById);
userRouters.delete("/:id", AuthMiddleware, UserController.remove);

export default userRouters;