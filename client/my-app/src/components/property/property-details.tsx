import { Property } from "@/types/property.type";
import {
    BedDouble,
    Bath,
    Ruler,
    MapPin,
} from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

type Props = {
    property: Property;
};

export default function PropertyDetails({
    property,
}: Props) {
    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-4xl font-bold">
                    {property.title}
                </h1>

                <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="size-4" />
                    {property.city}, {property.address}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

                <Card>
                    <CardContent className="flex flex-col items-center gap-3 py-6">
                        <BedDouble />
                        <span>{property.bedrooms} Bedrooms</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex flex-col items-center gap-3 py-6">
                        <Bath />
                        <span>{property.bathrooms} Bathrooms</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex flex-col items-center gap-3 py-6">
                        <Ruler />
                        <span>{property.area} m²</span>
                    </CardContent>
                </Card>

            </div>

            <Card>

                <CardContent className="space-y-4 py-6">

                    <h2 className="text-2xl font-semibold">
                        Description
                    </h2>

                    <p className="leading-8 text-muted-foreground">
                        {property.description}
                    </p>

                </CardContent>

            </Card>

        </div>
    );
}