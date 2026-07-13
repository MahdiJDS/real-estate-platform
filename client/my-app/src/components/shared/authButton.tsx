"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";
import { useLogout } from "@/features/auth/hooks/useLogout";

type Props = {
    onNavigate?: () => void;
};

export default function AuthButton({
    onNavigate,
}: Props) {

    const accessToken = useAuthStore(
        (state) => state.accessToken
    );

    const { mutate, isPending } = useLogout();

    if (accessToken) {

        return (

            <div className="flex gap-2">

                <Button
                    asChild
                    variant="outline"
                    size="sm"
                >
                    <Link
                        href="/properties/create"
                        onClick={onNavigate}
                    >
                        Create
                    </Link>
                </Button>

                <Button
                    size="sm"
                    disabled={isPending}
                    onClick={() => {
                        onNavigate?.();
                        mutate();
                    }}
                >
                    {isPending
                        ? "Logging out..."
                        : "Logout"}
                </Button>

            </div>

        );

    }

    return (

        <div className="flex gap-2">

            <Button
                asChild
                variant="outline"
                size="sm"
            >
                <Link
                    href="/login"
                    onClick={onNavigate}
                >
                    Login
                </Link>
            </Button>

            <Button
                asChild
                size="sm"
            >
                <Link
                    href="/register"
                    onClick={onNavigate}
                >
                    Register
                </Link>
            </Button>

        </div>

    );

}