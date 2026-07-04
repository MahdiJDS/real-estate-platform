import { Request, Response } from "express";
import { prisma } from "../../config/prisma";


// PATCH /api/properties/:id
export const updateProperty = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = req.user?.userId;

        const property = await prisma.property.findUnique({ where: { id: Number(id) } });

        if (!property) return res.status(404).json({ message: "Property not found" });

        if (property.ownerId !== userId) return res.status(403).json({ message: "Forbidden" });

        const updatedProperty = await prisma.property.update({
            where: { id: Number(id) },
            data: req.body,
        });

        res.json(updatedProperty);
    } catch (error) {
        res.status(500).json({
            message: "Error updating property",
            error: error instanceof Error ? error.message : error
        });
    }
};