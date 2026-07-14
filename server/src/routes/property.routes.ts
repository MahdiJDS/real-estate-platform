import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { uploadSingle } from "../middlewares/upload.middleware";
import { getAllProperties } from "../controllers/property/getAllProperties.controller";
import { getPropertyById } from "../controllers/property/getPropertyById.controller";
import { getMyProperties } from "../controllers/property/getMyProperties.controller";
import { createProperty } from "../controllers/property/createProperty.controller";
import { updateProperty } from "../controllers/property/updateProperty.controller";
import { deleteProperty } from "../controllers/property/deleteProperty.controller";

const router = express.Router();


router.get("/", getAllProperties);

router.post("/", authMiddleware, uploadSingle.single("image"), createProperty);

router.get("/my", authMiddleware, getMyProperties);

router.get("/:id", getPropertyById);

router.patch("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

export default router;