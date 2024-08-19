import { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db";
const cors = require("cors");

const viewController = require("./controllers/viewController");
const express = require("express");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("고생했음. 이제부터는 잘할거야");
});

connectDB();

app.use("/view", viewController);

app.listen(port, () => {
  console.log(port, "번에서 대기중");
});

export default app;
