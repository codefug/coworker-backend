"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const cors = require("cors");
const viewController = require("./controllers/viewController");
const express = require("express");
dotenv_1.default.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("고생했음. 이제부터는 잘할거야");
});
(0, db_1.default)();
app.use("/view", viewController);
app.listen(port, () => {
    console.log(port, "번에서 대기중");
});
