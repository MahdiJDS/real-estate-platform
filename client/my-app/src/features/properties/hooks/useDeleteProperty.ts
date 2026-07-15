"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteProperty } from "../services/deleteProperty.service";

export function useDeleteProperty() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProperty,

        onSuccess: () => {
            toast.success("Property deleted successfully");

            queryClient.invalidateQueries({
                queryKey: ["my-properties"],
            });

            queryClient.invalidateQueries({
                queryKey: ["properties"],
            });
        },

        onError: (error: any) => {
            toast.error(
                error?.response?.data?.message ??
                "Failed to delete property"
            );
        },
    });
}