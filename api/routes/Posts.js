import express from "express";

import {addpost , getpost, deletePost,getposts,updatePost} from "../controller/post.js"

const router =express.Router()

router.get("/", getposts )
router.get("/:id", getpost )
router.post("/", addpost )
router.delete("/:id", deletePost )
router.put("/:id", updatePost )

export default router