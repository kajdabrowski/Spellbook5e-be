import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouter from "./routes/userroutes";

const app = express();

app.use(express.json());
app.use(userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});
