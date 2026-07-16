"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Pencil } from "lucide-react";

import { useState } from "react";

import EditPropertyForm from "./EditPropertyForm";
import { Property } from "@/types/property.type";


type Props = {
    property: Property;
};


export function EditPropertyDialog({
    property,
}: Props) {

    const [open, setOpen] = useState(false);


    return (

        <Dialog
            open={open}
            onOpenChange={setOpen}
        >

            <DialogTrigger asChild>

                <Button
                    variant="outline"
                    className="flex-1"
                >
                    <Pencil className="mr-2 size-4" />
                    Edit
                </Button>

            </DialogTrigger>


            <DialogContent
                className="max-h-[90vh] overflow-y-auto"
            >

                <DialogHeader>

                    <DialogTitle>
                        Edit Property
                    </DialogTitle>

                </DialogHeader>


                <EditPropertyForm

                    property={property}

                    onSuccess={() =>
                        setOpen(false)
                    }

                />


            </DialogContent>


        </Dialog>

    );
}