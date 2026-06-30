import { z } from "zod";

export const createPropertySchema = z.object({

    title: z
        .string()
        .min(5, "Title must be at least 5 characters"),

    description: z
        .string()
        .min(30, "Description is too short"),

    city: z
        .string()
        .min(2),

    address: z
        .string()
        .min(5),

    price: z
        .number()
        .positive(),

    area: z
        .number()
        .positive(),

    bedrooms: z
        .number()
        .min(1),

    bathrooms: z
        .number()
        .min(1),

    image: z
        .instanceof(File)
        .nullable()

});

export type CreatePropertyForm =
    z.infer<typeof createPropertySchema>;