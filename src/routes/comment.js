import express from "express";
import { commented, getComment } from "../controllers/commentController.js";

const router = express.Router();

router.get("/", commented);

router.get("/:comment", getComment);

export default router;
