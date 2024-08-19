import { Request, Response } from "express";
import { coworker } from "../models/coworker";

const express = require("express");
const router = express.Router();

router.get("/:articleId", async (req: Request, res: Response) => {
  try {
    const articleView: {
      _id: string;
      articleId: string;
      view: number;
      createdAt: string;
      updatedAt: string;
      __v: number;
    } = await coworker.findOne({
      articleId: req.params.articleId,
    });
    if (!articleView) {
      return res.status(404).json({ error: "잘못된 요청입니다." });
    }
    res.status(200).json(articleView.view);
  } catch (error) {
    res.status(500).json({ error: "서버 오류입니다." });
  }
});

router.post("/:articleId", async (req: Request, res: Response) => {
  try {
    let product = await coworker.findOneAndUpdate(
      { articleId: req.params.articleId },
      { $inc: { view: 1 } },
      { new: true }
    );
    if (!product) {
      product = await coworker.create({
        articleId: req.body.articleId,
        view: 1,
      });
    }
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "서버 오류입니다." });
  }
});

module.exports = router;
