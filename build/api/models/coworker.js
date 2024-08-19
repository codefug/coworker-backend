"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coworker = void 0;
const mongoose = require("mongoose");
// Define Schemes
const coworkerSchema = new mongoose.Schema({
    articleId: { type: String, required: true, unique: true },
    view: { type: Number, default: 0 },
}, {
    timestamps: true,
}, { collection: "viewData" });
exports.coworker = mongoose.model("viewData", coworkerSchema);
