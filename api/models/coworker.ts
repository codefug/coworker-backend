const mongoose = require("mongoose");

// Define Schemes
const coworkerSchema = new mongoose.Schema(
  {
    articleId: { type: String, required: true, unique: true },
    view: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
  { collection: "viewData" }
);

export const coworker = mongoose.model("viewData", coworkerSchema);
