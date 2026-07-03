import { Request, Response } from "express";
import { signAccessToken, verifyRefreshToken } from "../../utils/jwt";
import { prisma } from "../../config/prisma";


export const refreshToken = async (
    req: Request,
    res: Response
) => {
    try {

        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token is required",
            });
        }

        const payload = verifyRefreshToken(refreshToken);

        const user = await prisma.user.findUnique({
            where: {
                id: payload.userId,
            },
        });

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        const accessToken = signAccessToken(user.id);

        return res.status(200).json({
            accessToken,
        });

    } catch {

        return res.status(401).json({
            message: "Invalid refresh token",
        });

    }
};
