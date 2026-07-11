"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface ErrorStateProps {
    title?: string;
    description?: string;
    onRetry?: () => void;
    homeHref?: string;
}

export function ErrorState({
    title = "Something went wrong",
    description = "An unexpected error occurred. Please try again.",
    onRetry,
    homeHref = "/",
}: ErrorStateProps) {
    return (
        <div className="flex min-h-[60vh] items-center justify-center px-4">

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl"
            >
                <Card className="rounded-2xl border shadow-xl">

                    <CardContent className="flex flex-col items-center gap-6 py-10 text-center">

                        <div className="rounded-full bg-destructive/10 p-5">
                            <AlertTriangle className="h-12 w-12 text-destructive" />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">
                                {title}
                            </h2>

                            <p className="text-muted-foreground">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">

                            {onRetry && (
                                <Button onClick={onRetry}>
                                    <RotateCcw className="mr-2 h-4 w-4" />
                                    Try Again
                                </Button>
                            )}

                            <Button
                                asChild
                                variant="outline"
                            >
                                <Link href={homeHref}>
                                    <Home className="mr-2 h-4 w-4" />
                                    Back Home
                                </Link>
                            </Button>

                        </div>

                    </CardContent>

                </Card>
            </motion.div>

        </div>
    );
}