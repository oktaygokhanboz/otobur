import express from "express";
import accessionController from "../controllers/accession.controller.js";

const router = express.Router();

router.get("/", accessionController.getAccessionTable);
router.post("/", accessionController.addNewRecord);
router.patch("/:id", accessionController.patchRecord);
router.delete("/:id", accessionController.deleteRecord);

export default router;
