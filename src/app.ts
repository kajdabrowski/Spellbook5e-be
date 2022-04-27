import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouter from "./routes/userRoutes";
import apiRouter from "./routes/apiRoutes";

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(apiRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});
