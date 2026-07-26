import { prisma } from "../../config/prisma";
import { Request, Response } from "express";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";

export const createProperty = async (
    req: Request,
    res: Response
) => {
    try {
        const {
            title,
            description,
            price,
            city,
            address,
            area,
            bedrooms,
            bathrooms,
        } = req.body;

        const userId = req.user?.userId;

        if (!userId) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        let imageUrl: string | undefined;

        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer);
            imageUrl = uploadResult.secure_url;
        }


        const property = await prisma.property.create({
            data: {
                title,
                description,
                price: Number(price),
                city,
                address,
                ...(area !== undefined && {
                    area: Number(area),
                }),

                ...(bedrooms !== undefined && {
                    bedrooms: Number(bedrooms),
                }),

                ...(bathrooms !== undefined && {
                    bathrooms: Number(bathrooms),
                }),
                ...(imageUrl && {
                    imageUrl: imageUrl,
                }),
                ownerId: userId,
            },
            include: {
                owner: true,
            },
        });

        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({
            message: "Error creating property",
            error: error instanceof Error ? error.message : error,
        });
    }
};

