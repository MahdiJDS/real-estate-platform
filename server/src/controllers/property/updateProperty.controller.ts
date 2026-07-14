import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

export const updateProperty = async (
    req: Request,
    res: Response
) => {

    try {

        const { id } = req.params;

        const userId = req.user.userId;


        const property = await prisma.property.findUnique({
            where: {
                id: Number(id),
            },
        });


        if (!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }


        if (property.ownerId !== userId) {
            return res.status(403).json({
                message: "Forbidden",
            });
        }



        const {
            title,
            description,
            city,
            address,
            price,
            bedrooms,
            bathrooms,
            area,
        } = req.body;



        const updatedProperty = await prisma.property.update({

            where: {
                id: Number(id),
            },


            data: {

                ...(title && {
                    title,
                }),

                ...(description && {
                    description,
                }),

                ...(city && {
                    city,
                }),

                ...(address && {
                    address,
                }),

                ...(price && {
                    price: Number(price),
                }),

                ...(bedrooms && {
                    bedrooms: Number(bedrooms),
                }),

                ...(bathrooms && {
                    bathrooms: Number(bathrooms),
                }),

                ...(area && {
                    area: Number(area),
                }),

            },

        });



        return res.json(updatedProperty);


    } catch (error) {

        return res.status(500).json({
            message: "Error updating property",
            error: error instanceof Error
                ? error.message
                : error,
        });

    }

};