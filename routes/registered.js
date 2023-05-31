import express from "express";
const router = express.Router();
import controller from "../controllers/registered.js";
import authorization from "../middelware/authorization.js";

router.get("/", authorization, controller.getAll);
router.get("/:id", authorization, controller.getById);
router.post("/", controller.post);
router.delete("/:id", authorization, controller.remove);

export default router;
