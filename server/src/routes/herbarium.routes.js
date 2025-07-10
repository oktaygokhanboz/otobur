import express from "express";
import herbariumController from "../controllers/herbarium.controller.js";

const router = express.Router();

router.get("/", herbariumController.getAllHerbarium);

export default router;
