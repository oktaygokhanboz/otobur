import express from "express";
import accessionController from "../controllers/accession.controller.js";

const router = express.Router();

router.get("/", accessionController.getAll);
router.get("/:id", accessionController.getRecord);
router.post("/", accessionController.addNewRecord);
router.patch("/", accessionController.patchRecord);
router.delete("/:id", accessionController.deleteRecord);

export default router;
