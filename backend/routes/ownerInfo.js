import express from "express";
const router = express.Router();
import controller from "../controllers/ownerInfo.js";
import authorization from "../middelware/authorization.js";


router.put("/:id", authorization, controller.put);

export default router;
