import { Request, Response } from "express";
import { signAccessToken, signRefreshToken } from "../../utils/jwt";
const bcrypt = require('bcrypt')
import { prisma } from "../../config/prisma";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const accessToken = signAccessToken(user.id);
        const refreshToken = signRefreshToken(user.id);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        });

        res.json({ accessToken, user });
    } catch (error) {
        console.log("LOGIN ERROR:", error);
        res.status(500).json({
            message: "Server Error",
            error: error instanceof Error ? error.message : error
        });
    }
};