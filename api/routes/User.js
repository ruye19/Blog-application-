import express from "express";

const router = express.Router();

import { userController } from "../controller/user.js"

router.get("/user", userController)



export default router