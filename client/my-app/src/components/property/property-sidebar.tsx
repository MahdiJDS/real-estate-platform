"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Share2,
} from "lucide-react";

import { Property } from "@/types/property.type";

import {
    Card,
    CardContent,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";
import {handleShare} from "../shared/handleShare";

type Props = {
    property: Property;
};

export default function PropertySidebar({
    property,
}: Props) {


    return (

        <motion.aside
            initial={{
                opacity: 0,
                x: 25,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: .4,
            }}
            className="sticky top-24"
        >

            <Card className="overflow-hidden rounded-2xl shadow-lg">

                <div className="bg-primary p-6 text-primary-foreground">

                    <p className="text-sm opacity-80">
                        Property Price
                    </p>

                    <h2 className="mt-2 text-4xl font-bold">
                        $
                        {property.price.toLocaleString()}
                    </h2>

                </div>

                <CardContent className="space-y-6 p-6">

                    <div className="flex items-center gap-4">

                        <div>

                            <h3 className="font-semibold text-lg">
                                {property.owner.firstName}{" "}
                                {property.owner.lastName}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                Property Agent
                            </p>

                        </div>

                    </div>

                    <div className="rounded-xl bg-muted p-4">

                        <p className="text-sm font-medium">
                            Email
                        </p>

                        <p className="mt-1 break-all text-sm text-muted-foreground">
                            {property.owner.email}
                        </p>

                    </div>

                    <div className="space-y-3">


                        <Button
                            asChild
                            className="w-full gap-2"
                        >
                            <a
                                href={`mailto:${property.owner.email}`}
                            >
                                <Mail className="size-4" />
                                Send Email
                            </a>
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full gap-2"
                            onClick={() => handleShare(property)}
                        >
                            <Share2 className="size-4" />
                            Share Property
                        </Button>

                    </div>

                </CardContent>

            </Card>

        </motion.aside>

    );
}