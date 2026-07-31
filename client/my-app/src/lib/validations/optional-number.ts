import { z } from "zod";

export const optionalNumber = (schema: z.ZodNumber) =>
    z.preprocess(
        (value) => {
            if (value === "" || value === undefined) {
                return undefined;
            }
        },
        schema.optional()
    );