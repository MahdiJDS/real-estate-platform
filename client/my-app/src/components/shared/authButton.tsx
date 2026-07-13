"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";
import { useLogout } from "@/features/auth/hooks/useLogout";

export default function AuthButton() {

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
                    <Link href="/properties/create">
                        Create
                    </Link>
                </Button>

                <Button
                    size="sm"
                    onClick={() => mutate()}
                    disabled={isPending}
                >
                    {isPending ? "Logging out..." : "Logout"}
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
                <Link href="/login">
                    Login
                </Link>
            </Button>

            <Button
                asChild
                size="sm"
            >
                <Link href="/register">
                    Register
                </Link>
            </Button>

        </div>

    );

}