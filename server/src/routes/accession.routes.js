import express from "express";
import accessionController from "../controllers/accession.controller.js";

const router = express.Router();

router.get("/", accessionController.getAccessionTable);

export default router;
