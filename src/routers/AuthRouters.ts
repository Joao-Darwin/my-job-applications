import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouters = Router();

authRouters.post("/login", AuthController.authentication);

export default authRouters;