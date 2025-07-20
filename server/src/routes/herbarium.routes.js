import express from "express";
import herbariumController from "../controllers/herbarium.controller.js";

const router = express.Router();

router.get("/", herbariumController.getAllHerbarium);
router.get("/:id", herbariumController.getRecord);
router.post("/", herbariumController.addNewRecord);
router.patch("/", herbariumController.patchRecord);
router.delete("/:id", herbariumController.deleteRecord);

export default router;
