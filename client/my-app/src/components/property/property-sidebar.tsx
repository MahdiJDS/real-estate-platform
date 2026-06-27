import { Property } from "@/types/property.type";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

type Props = {
    property: Property;
};

export default function PropertySidebar({
    property,
}: Props) {
    return (
        <Card className="h-90">

            <CardHeader>

                <h2 className="text-3xl font-bold">
                    ${property.price}
                </h2>

            </CardHeader>

            <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="space-y-1">
                    <p className="font-semibold">
                        {property.owner.firstName} {property.owner.lastName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        {property.owner.email}
                    </p>
                </div>

                <Button className="mt-6 w-full">
                    Contact Agent
                </Button>
            </CardContent>

        </Card>
    );
}