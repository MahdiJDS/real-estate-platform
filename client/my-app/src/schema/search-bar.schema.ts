import { z } from "zod";

export const propertyFilterSchema = z.object({
    city: z.string().regex(/^[a-zA-Z\u0600-\u06FF\s]*$/, {
        message: "City must contain only letters",
    }).
        optional(),
    minPrice: z.coerce.number("Price must br number").positive("Price must be greater than 0").optional(),
    maxPrice: z.coerce.number("Price must br number").positive("Price must be greater than 0").optional(),
    sort: z.enum(["newest", "oldest", "priceAsc", "priceDesc"]).optional(),
});

export type PropertyFilterForm = z.infer<typeof propertyFilterSchema>;