import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
} from "../controllers/property.controller";

const router = express.Router();


router.get("/", getAllProperties);
router.get("/:id", getPropertyById);


router.post("/", authMiddleware, createProperty);
router.patch("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

export default router;