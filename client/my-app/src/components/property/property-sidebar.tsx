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

// import {
//     Avatar,
//     AvatarFallback,
// } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

type Props = {
    property: Property;
};

export default function PropertySidebar({
    property,
}: Props) {

    const initials =
        `${property.owner.firstName[0]}${property.owner.lastName[0]}`;

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

                        {/* <Avatar className="size-14">

                            <AvatarFallback className="text-lg font-bold">
                                {initials}
                            </AvatarFallback>

                        </Avatar> */}

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
                            className="w-full gap-2"
                        >
                            <Mail className="size-4" />
                            Send Email
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full gap-2"
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