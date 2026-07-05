"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type Props = {
    isPending: boolean;
    children: ReactNode
};

export function SubmitButton({
    isPending,
    children
}: Props) {
    return (
        <Button
            type="submit"
            className="w-full"
            disabled={isPending}
        >
            {isPending ? "Loading..." : children}
        </Button>
    );
}