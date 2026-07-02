"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProperty } from "@/services/createProperty.service";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

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
            const axiosError = error as AxiosError<{ message: string }>;
            toast.error(
                axiosError.response?.data?.message ??
                "Failed to create property"
            );
            console.error(error);
        },
    });
}