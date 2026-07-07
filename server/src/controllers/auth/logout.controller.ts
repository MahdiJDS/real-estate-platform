import { Request, Response } from "express";

export const logout = async (
    _req: Request,
    res: Response
) => {

    res.clearCookie("refreshToken", {
        httpOnly: true,
        sameSite: "lax",
    });

    return res.status(200).json({
        message: "Logged out successfully",
    });

};