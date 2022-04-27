import { Router } from "express";
import * as userController from "../controllers/userController";
import auth from "../middlewares/auth";

const userRouter = Router();

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/", userController.getUser); //Lägg till auth
userRouter.delete("/remove", auth, userController.removeUser);

export default userRouter;
