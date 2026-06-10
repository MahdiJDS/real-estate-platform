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


