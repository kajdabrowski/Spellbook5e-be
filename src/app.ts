import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouter from "./routes/userRoutes";
import apiRouter from "./routes/apiRoutes";
import auth from "./middlewares/auth";

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(auth,apiRouter); //Lägg till auth middleware innan apiRouter

const port = 3000;

app.listen(port, () => {
  console.log(`Spellbook5e running on port ${port}.`);
});
