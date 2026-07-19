"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
    imageUrl: string | null;
};

export default function PropertyGallery({
    imageUrl,
}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.98,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.4,
            }}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
        >
            <div className="relative aspect-[16/8] w-full">

                <Image
                    src={imageUrl ?? "/placeholder.jpg"}
                    alt="Property"
                    fill
                    priority
                    sizes="(max-width:768px) 100vw, 75vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Scroll Indicator */}

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center text-white">

                        <span className="mb-2 text-xs font-medium tracking-[0.25em] uppercase">
                            Scroll
                        </span>

                        <div className="rounded-full border border-white/70 bg-black/30 p-2 backdrop-blur">
                            <ChevronDown className="size-6" />
                        </div>

                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}