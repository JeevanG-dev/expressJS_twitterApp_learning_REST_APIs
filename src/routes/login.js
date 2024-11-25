import express from "express";
import { loginController } from "../controllers/loginController.js";
import { loginValidator } from "../validators/loginValidator.js";


const router = express.Router()

router.get('/', loginValidator, loginController)


export default router