"use client";

import { Button } from "@/components/ui/button";

type Props = {
    isPending: boolean;
};

export function SubmitButton({
    isPending,
}: Props) {
    return (
        <Button
            type="submit"
            className="w-full"
            disabled={isPending}
        >
            {isPending ? "Loading..." : "Create Property"}
        </Button>
    );
}