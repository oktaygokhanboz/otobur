import express from "express";
import conditionController from "../controllers/condition.controller.js";

const router = express.Router();

router.get("/", conditionController.getAllConditions);

export default router;
