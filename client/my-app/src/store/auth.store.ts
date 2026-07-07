import { create } from "zustand";

import { User } from "@/types/User.type";

interface AuthState {
    user: User | null;
    accessToken: string | null;

    setUser: (user: User | null) => void;

    setAccessToken: (token: string | null) => void;

    login: (user: User, token: string) => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({

    user: null,

    accessToken: null,

    setUser: (user) =>
        set({
            user,
        }),

    setAccessToken: (accessToken) =>
        set({
            accessToken,
        }),

    login: (user, accessToken) =>
        set({
            user,
            accessToken,
        }),

    logout: () =>
        set({
            user: null,
            accessToken: null,
        }),

}));