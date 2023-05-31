import express from "express";
const router = express.Router();
import controller from "../controllers/plant.js";
import authorization from "../middelware/authorization.js";
import upload from "../middelware/multer.js";

router.get("/av",  controller.getAvailable);
router.get("/", authorization, controller.getHidden);
router.get("/:id", authorization, controller.getById);
router.get("/av/:id",  controller.getAvailableById);
router.put("/:id",  upload.single("image"), controller.put);
router.put("/soft/:id", authorization, controller.softDelete);
router.delete("/:id", authorization, controller.remove);
router.post("/",  upload.single("image"), controller.post);

export default router;
