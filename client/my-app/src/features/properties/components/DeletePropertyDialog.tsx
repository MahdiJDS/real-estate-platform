"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import { useDeleteProperty } from "../hooks/useDeleteProperty";

type Props = {
    propertyId: number;
};

export function DeletePropertyDialog({
    propertyId,
}: Props) {
    const {
        mutate,
        isPending,
    } = useDeleteProperty();

    return (
        <AlertDialog>

            <AlertDialogTrigger asChild>

                <Button
                    variant="destructive"
                    className="flex-1"
                >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                </Button>

            </AlertDialogTrigger>

            <AlertDialogContent>

                <AlertDialogHeader>

                    <AlertDialogTitle>
                        Delete Property
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Are you sure you want to delete this property?
                        This action cannot be undone.
                    </AlertDialogDescription>

                </AlertDialogHeader>

                <AlertDialogFooter>

                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        disabled={isPending}
                        onClick={() => mutate(propertyId)}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </AlertDialogAction>

                </AlertDialogFooter>

            </AlertDialogContent>

        </AlertDialog>
    );
}