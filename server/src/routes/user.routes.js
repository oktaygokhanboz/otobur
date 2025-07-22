import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.addUser);
router.put("/", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

export default router;
