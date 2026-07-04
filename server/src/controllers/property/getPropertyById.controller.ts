import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

// GET /api/properties/:id
export const getPropertyById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const property = await prisma.property.findUnique({
            where: { id: Number(id) },
            include: { owner: true },
        });

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.json(property);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching property",
            error: error instanceof Error ? error.message : error

        });
    }
};

