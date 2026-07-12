"use client";

import { ReactNode } from "react";

import { useRestoreSession } from "@/features/auth/hooks/useRestoreSession";
import SkeletonCard from "@/components/shared/loadingState"

type Props = {
    children: ReactNode;
};

export function AuthProvider({
    children,
}: Props) {
    const { isLoading } = useRestoreSession();

    if (isLoading) {
        return (
            <div className="p-15 flex justify-center items-center">
                <SkeletonCard />
            </div>
        )
    }

    return children;
}