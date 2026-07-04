import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const getMyProperties = async (
    req: Request,
    res: Response
) => {
    try {

        const properties = await prisma.property.findMany({

            where: {
                ownerId: req.user.userId,
            },

            orderBy: {
                createdAt: "desc",
            },

        });

        return res.json(properties);

    } catch (error) {

        return res.status(500).json({
            message: "Server Error",
            error: error instanceof Error ? error.message : error
        });

    }
};