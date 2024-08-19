"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const coworker_1 = require("../models/coworker");
const express = require("express");
const router = express.Router();
// Get all products
router.get("/:articleId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articleView = yield coworker_1.coworker.findOne({
            articleId: req.params.articleId,
        });
        if (!articleView) {
            return res.status(404).json({ error: "잘못된 요청입니다." });
        }
        res.status(200).json(articleView.view);
    }
    catch (error) {
        res.status(500).json({ error: "서버 오류입니다." });
    }
}));
router.post("/:articleId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield coworker_1.coworker.findOneAndUpdate({ articleId: req.params.articleId }, { $inc: { view: 1 } }, { new: true });
        if (!product) {
            product = yield coworker_1.coworker.create({
                articleId: req.body.articleId,
                view: 1,
            });
        }
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: "서버 오류입니다." });
    }
}));
module.exports = router;
