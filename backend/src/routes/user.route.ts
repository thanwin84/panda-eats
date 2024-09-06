import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import { validateUserCreateInput } from "../middleware/validation.middleware";

const router = Router()
router.route("/").post(validateUserCreateInput,createUser)


export default router