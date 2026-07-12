"use client";

import { useEffect, useState } from "react";

import { refresh } from "../services/refresh.service";
import { getMe } from "../services/me.service";

import { useAuthStore } from "@/store/auth.store";

export function useRestoreSession() {
    const [isLoading, setIsLoading] = useState(true);

    const setAuth = useAuthStore((state) => state.login);
    const clearAuth = useAuthStore((state) => state.logout);

    useEffect(() => {
        async function restoreSession() {
            try {
                const { accessToken } = await refresh();

                useAuthStore
                    .getState()
                    .setAccessToken(accessToken);

                const user = await getMe();

                setAuth(user, accessToken);
            } catch {
                clearAuth();
            } finally {
                setIsLoading(false);
            }
        }

        restoreSession();
    }, [setAuth, clearAuth]);

    return {
        isLoading,
    };
}