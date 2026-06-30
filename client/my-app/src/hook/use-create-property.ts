"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProperty } from "@/services/createProperty.service";
import toast from "react-hot-toast";

export function useCreateProperty() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProperty,

        onSuccess: () => {
            toast.success("Property created successfully");

            queryClient.invalidateQueries({
                queryKey: ["properties"],
            });
        },

        onError: (error) => {
            toast.error("Failed to create property");
            console.error(error);
        },
    });
}