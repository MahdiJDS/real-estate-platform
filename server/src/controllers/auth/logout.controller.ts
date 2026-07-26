import { Request, Response } from "express";
import { refreshCookieOptions } from "../../config/cookie";

export const logout = async (
    _req: Request,
    res: Response
) => {

    res.clearCookie("refreshToken", refreshCookieOptions);

    return res.status(200).json({
        message: "Logged out successfully",
    });

};