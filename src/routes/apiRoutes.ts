import { Router } from "express";
import * as apiController from "../controllers/apiController";
import auth from "../middlewares/auth";

const apiRouter = Router()

apiRouter.get("/spells", apiController.getAllSpells)
apiRouter.get("/spells/:dnd_class/:level", apiController.getSpellsByClass)
apiRouter.get("/bardspells", apiController.getBardSpells)
apiRouter.get("/druidspells", apiController.getDruidSpells)
apiRouter.get("/paladinspells", apiController.getPaladinSpells)
apiRouter.get("/sorcererspells", apiController.getSorcererSpells)
apiRouter.get("/wizardspells", apiController.getWizardSpells)
apiRouter.get("/warlockspells", apiController.getWarlockSpells)

export default apiRouter;

