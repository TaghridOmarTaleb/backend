import express from "express";
const router = express.Router();
import controller from "../controllers/message.js";
import authorization from "../middelware/authorization.js";


router.get("/all", authorization, controller.getAll);
router.get("/:id", authorization, controller.getById);
router.post("/", authorization, controller.post);
router.delete("/:id", authorization, controller.remove);
router.put("/:id", authorization, controller.put);

export default router;
