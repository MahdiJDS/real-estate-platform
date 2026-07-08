"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { register } from "../services/register.service";

export function useRegister() {
    const router = useRouter();

    return useMutation({
        
        mutationFn: register,

        onSuccess: () => {

            toast.success("Account created successfully");

            router.push("/login");

        },

        onError: (error: any) => {

            toast.error(
                error?.response?.data?.message ??
                "Registration failed"
            );

        },

    });
}