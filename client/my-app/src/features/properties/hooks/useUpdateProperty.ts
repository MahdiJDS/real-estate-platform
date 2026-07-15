"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateProperty } from "../services/updateProperty.service";


export function useUpdateProperty() {

    const queryClient = useQueryClient();


    return useMutation({

        mutationFn: ({
            id,
            data,
        }: {
            id: number;
            data: FormData;
        }) => updateProperty(id, data),


        onSuccess: () => {

            toast.success(
                "Property updated successfully"
            );


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
                "Failed to update property"
            );

        },

    });

}