"use client";

import { useMutation } from "@tanstack/react-query";
import { createProperty } from "@/services/createProperty.service";
import { useQueryClient } from "@tanstack/react-query";

export function useCreateProperty() {

    const queryClient =
        useQueryClient();

    return useMutation({

        mutationFn: createProperty,

        onSuccess() {

            queryClient.invalidateQueries({

                queryKey: ["properties"],
            });

        },

    });

}