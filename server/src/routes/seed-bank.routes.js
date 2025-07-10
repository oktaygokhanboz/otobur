import express from "express";
import seedBankController from "../controllers/seed-bank.controller.js";

const router = express.Router();

router.get("/", seedBankController.getAllSeedBank);

export default router;
