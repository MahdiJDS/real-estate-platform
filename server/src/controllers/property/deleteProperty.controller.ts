import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

// DELETE /api/properties/:id
export const deleteProperty = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = req.user?.userId;

        const property = await prisma.property.findUnique({ where: { id: Number(id) } });

        if (!property) return res.status(404).json({ message: "Property not found" });

        if (property.ownerId !== userId) return res.status(403).json({ message: "Forbidden" });

        await prisma.property.delete({ where: { id: Number(id) } });

        res.json({ message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting property",
            error: error instanceof Error ? error.message : error
        });
    }
};