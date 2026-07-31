import { z } from "zod";

import {
    optionalNumber,
    optionalString
} from "@/lib/validations";


export const createPropertySchema = z.object({

    title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters"),


    description: optionalString(
        z.string()
            .trim()
            .min(30, "Description is too short")
    ),


    city: z
        .string()
        .trim()
        .min(2, "City must be at least 2 characters"),


    address: optionalString(
        z.string()
            .trim()
            .min(5, "Address must be at least 5 characters")
    ),


    price: z.preprocess(
        (value) => Number(value),
        z.number()
            .positive("Price must be positive")
    ),


    area: optionalNumber(
        z.number()
            .int()
            .min(1, "Area must be greater than 0")
    ),


    bedrooms: optionalNumber(
        z.number()
            .int()
            .min(0, "Bedrooms cannot be negative")
    ),


    bathrooms: optionalNumber(
        z.number()
            .int()
            .min(0, "Bathrooms cannot be negative")
    ),


    image: z
        .instanceof(File)
        .nullable()
        .optional()

});


export type CreatePropertyInput =
    z.input<typeof createPropertySchema>;


export type CreatePropertyForm =
    z.output<typeof createPropertySchema>;