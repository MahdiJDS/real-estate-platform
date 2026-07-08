"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { login } from "../services/login.service";

import { useAuthStore } from "@/store/auth.store";

export function useLogin() {
    const router = useRouter();

    const setAuth = useAuthStore(
        (state) => state.login
    );

    return useMutation({
        mutationFn: login,

        onSuccess: (data) => {
            setAuth(
                data.user,
                data.accessToken
            );

            toast.success("Welcome back");

            router.push("/");
        },

        onError: (error) => {
            console.error(error);

            toast.error(
                "Invalid email or password"
            );
        },
    });
}