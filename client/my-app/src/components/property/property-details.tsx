"use client";

import { motion } from "framer-motion";
import {
    Bath,
    BedDouble,
    MapPin,
    Ruler,
} from "lucide-react";

import { Property } from "@/types/property.type";

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

    const features = [
        {
            icon: BedDouble,
            label: "Bedrooms",
            value: property.bedrooms,
        },
        {
            icon: Bath,
            label: "Bathrooms",
            value: property.bathrooms,
        },
        {
            icon: Ruler,
            label: "Area",
            value: `${property.area} m²`,
        },
    ];

    return (
        <div className="space-y-10">

            {/* Header */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: .4,
                }}
                className="space-y-4"
            >

                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                    <div>

                        <h1 className="text-4xl font-bold tracking-tight">
                            {property.title}
                        </h1>

                        <div className="mt-3 flex items-center gap-2 text-muted-foreground">

                            <MapPin className="size-4" />

                            <span>
                                {property.city}, {property.address}
                            </span>

                        </div>

                    </div>

                    <div className="rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">

                        <p className="text-xs uppercase tracking-widest opacity-80">
                            Price
                        </p>

                        <h2 className="text-3xl font-bold">
                            $
                            {property.price.toLocaleString()}
                        </h2>

                    </div>

                </div>

            </motion.div>

            {/* Features */}

            <div className="grid gap-5 md:grid-cols-3">

                {features.map((feature, index) => {

                    const Icon = feature.icon;

                    return (

                        <motion.div
                            key={feature.label}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: .35,
                                delay: index * .1,
                            }}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                            }}
                        >

                            <Card className="transition-shadow duration-300 hover:shadow-xl">

                                <CardContent className="flex flex-col items-center gap-4 py-8">

                                    <div className="rounded-2xl bg-primary/10 p-4 text-primary">

                                        <Icon className="size-7" />

                                    </div>

                                    <div className="text-center">

                                        <p className="text-sm text-muted-foreground">
                                            {feature.label}
                                        </p>

                                        <h3 className="mt-1 text-2xl font-bold">
                                            {feature.value}
                                        </h3>

                                    </div>

                                </CardContent>

                            </Card>

                        </motion.div>

                    );

                })}

            </div>

            {/* Description */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: .4,
                    delay: .2,
                }}
            >

                <Card className="shadow-sm">

                    <CardContent className="space-y-5 py-8">

                        <h2 className="text-2xl font-bold">
                            Property Description
                        </h2>

                        <div className="h-px w-full bg-border" />

                        <p className="leading-8 text-muted-foreground">
                            {property.description ||
                                "No description available for this property."}
                        </p>

                    </CardContent>

                </Card>

            </motion.div>

        </div>
    );
}