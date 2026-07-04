import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

// GET /api/properties
export const getAllProperties = async (req: Request, res: Response) => {
    try {
        const { city, minPrice, maxPrice, sort } = req.query;
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

        let orderBy: Prisma.PropertyOrderByWithRelationInput = {
            createdAt: "desc"
        };

        switch (sort) {

            case "priceAsc":
                orderBy = {
                    price: "asc"
                };
                break;

            case "priceDesc":
                orderBy = {
                    price: "desc"
                };
                break;

            case "oldest":
                orderBy = {
                    createdAt: "asc"
                };
                break;

            case "newest":
                orderBy = {
                    createdAt: "desc"
                };
                break;

        }

        const properties = await prisma.property.findMany({
            where,
            orderBy,
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