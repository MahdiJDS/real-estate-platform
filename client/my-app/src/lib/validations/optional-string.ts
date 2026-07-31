import { z } from "zod";

export const optionalString = (schema: z.ZodString) =>
    z.preprocess(
        (value) =>
            typeof value === "string" &&
                value.trim() === ""
                ? undefined
                : value,
        schema.optional()
    );