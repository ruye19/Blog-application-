import express from "express"
const router =express.Router()

import {authcontroller} from "../controller/auth.js"

router.get("/auth",authcontroller)

export default router