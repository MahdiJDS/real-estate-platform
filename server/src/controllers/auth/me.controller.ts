import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const me = async (
    req: Request,
    res: Response
) => {

    const { userId } = req.user;

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            createdAt: true,
        },
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    return res.json(user);

};