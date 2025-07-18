import express from "express";
import collectorController from "../controllers/collector.controller.js";
const router = express.Router();

router.get("/", collectorController.getAllCollectors);
router.get("/:id", collectorController.getRecord);
router.post("/", collectorController.addRecord);
router.patch("/", collectorController.patchRecord);
router.delete("/:id", collectorController.deleteRecord);

export default router;
