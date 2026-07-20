"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProperty } from "@/services/createProperty.service";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export function useCreateProperty() {
    const queryClient = useQueryClient();
    const router = useRouter()

    return useMutation({
        mutationFn: createProperty,

        onSuccess: () => {
            toast.success("Property created successfully");

            router.push(
                "/properties/my-properties"
            );

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