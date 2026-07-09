"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { logout } from "../services/logout.service";
import { useAuthStore } from "@/store/auth.store";

export function useLogout() {

    const router = useRouter();

    const clearAuth = useAuthStore(
        (state) => state.logout
    );

    return useMutation({

        mutationFn: logout,

        onSuccess() {

            clearAuth();

            router.replace("/login");

        },

    });

}