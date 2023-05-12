import express from "express";
const router = express.Router();
import controller from "../controllers/plant.js";
import authorization from "../middelware/authorization.js";
import upload from "../middelware/multer.js";

router.get("/all", controller.getAvailable);
router.get("/", controller.getHidden);
router.get("/:id", controller.getById);
router.get("/av/:id", controller.getAvailableById);
router.put("/:id", authorization, controller.put);
router.put("/soft/:id", authorization, controller.softDelete);
router.delete("/:id", authorization, controller.deleteplant);
router.post("/", authorization, upload.single("image"), controller.post);

export default router;
