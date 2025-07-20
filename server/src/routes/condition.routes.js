import express from "express";
import conditionController from "../controllers/condition.controller.js";

const router = express.Router();

router.get("/", conditionController.getAllConditions);
router.get("/:id", conditionController.getRecord);
router.post("/", conditionController.addRecord);
router.patch("/", conditionController.patchRecord);
router.delete("/:id", conditionController.deleteRecord);

export default router;
