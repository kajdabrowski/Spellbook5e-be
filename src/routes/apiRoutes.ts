import { Router } from "express";
import * as apiController from "../controllers/apiController";
import auth from "../middlewares/auth";

const apiRouter = Router()

apiRouter.get("/spells", apiController.getAllSpells) //lägg till auth

export default apiRouter;

