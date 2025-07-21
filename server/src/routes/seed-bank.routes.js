import express from "express";
import seedBankController from "../controllers/seed-bank.controller.js";

const router = express.Router();

router.get("/", seedBankController.getAllSeedBank);
router.get("/:id", seedBankController.getRecord);
router.post("/", seedBankController.addNewRecord);
router.patch("/", seedBankController.patchRecord);
router.delete("/:id", seedBankController.deleteRecord);

export default router;
