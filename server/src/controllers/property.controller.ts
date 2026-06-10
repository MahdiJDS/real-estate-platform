import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import { Prisma } from "@prisma/client";


//POST /api/properties
export const createProperty = async (
    req: Request,
    res: Response
) => {
    try {

        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const {
            title,
            description,
            price,
            city,
            address,
            area,
            bedrooms,
            bathrooms
        } = req.body;

        const userId = req.user.userId;

        const property = await prisma.property.create({
            data: {
                title,
                description,
                price,
                city,
                address,
                area,
                bedrooms,
                bathrooms,
                ownerId: userId
            }
        });

        res.status(201).json(property);

    } catch (error) {
        res.status(500).json({
            message: "Error creating property",
            error: error instanceof Error ? error.message : error
        });
    }
};


// GET /api/properties
export const getAllProperties = async (req: Request, res: Response) => {
    try {
        const { city, minPrice, maxPrice } = req.query;
        const where: Prisma.PropertyWhereInput = {};

        if (city) {
            where.city = String(city);
        }

        if (minPrice || maxPrice) {
            where.price = {
                ...(minPrice && { gte: Number(minPrice) }),
                ...(maxPrice && { lte: Number(maxPrice) }),
            };
        }

        const properties = await prisma.property.findMany({
            where,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                owner: true,
            },
        });

        res.json(properties);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching properties",
            error: error instanceof Error ? error.message : error
        });
    }
};


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