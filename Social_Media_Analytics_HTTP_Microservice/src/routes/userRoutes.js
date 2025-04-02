import express from "express";
const router = express.Router();
import { userController } from "../controllers/userController.js";

router.get("/users", userController.getTopUsers);

export { router };
