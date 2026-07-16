"use client";

import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2, MapPin, BedDouble, Bath, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useDeleteProperty } from "../hooks/useDeleteProperty";
import { DeletePropertyDialog } from "./DeletePropertyDialog";
import { EditPropertyDialog } from "./EditPropertyDialog";
import { CreatePropertyForm } from "@/schema/createProperty.schema";
import { Property } from "@/types/property.type";

type Props = {
    property: Property;
};

export function MyPropertyCard({ property }: Props) {
    return (
        <Card className="overflow-hidden">

            <div className="relative h-56 w-full">

                <Image
                    src={property.imageUrl || "/images/property-placeholder.jpg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                />

            </div>

            <CardContent className="space-y-4 pt-4">

                <div>

                    <h3 className="text-lg font-semibold">
                        {property.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">

                        <MapPin className="size-4" />

                        {property.city}

                    </div>

                </div>

                <p className="text-xl font-bold">
                    ${property.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-5 text-sm text-muted-foreground">

                    <span className="flex items-center gap-1">
                        <BedDouble className="size-4" />
                        {property.bedrooms}
                    </span>

                    <span className="flex items-center gap-1">
                        <Bath className="size-4" />
                        {property.bathrooms}
                    </span>

                    <span className="flex items-center gap-1">
                        <Square className="size-4" />
                        {property.area} m²
                    </span>

                </div>

            </CardContent>

            <CardFooter className="flex gap-3">

                <EditPropertyDialog
                    property={property}
                />

                <DeletePropertyDialog
                    propertyId={property.id}
                />

            </CardFooter>

        </Card>
    );
}