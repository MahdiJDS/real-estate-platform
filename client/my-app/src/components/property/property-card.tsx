"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  id: number;
  title: string;
  city: string;
  price: number;
  imageUrl: string;
};

export default function PropertyCard({
  id,
  title,
  city,
  price,
  imageUrl,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
    >
      <Card className="group overflow-hidden rounded-2xl border bg-background p-0 transition-shadow hover:shadow-2xl">

        <div className="relative overflow-hidden">

          <Link href={`/properties/${id}`}>

            <div className="relative aspect-4/3">

              <Image
                src={imageUrl ?? "/file.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            </div>

          </Link>



        </div>

        <div className="space-y-4 p-5">

          <div>

            <h3 className="line-clamp-1 text-xl font-semibold">
              {title}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-muted-foreground">

              <MapPin className="h-4 w-4" />

              <span>{city}</span>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-2xl font-bold text-primary">
                ${price.toLocaleString()}
              </p>

              <p className="text-xs text-muted-foreground">
                Total Price
              </p>

            </div>

            <Button
              asChild
              className="gap-2"
            >
              <Link href={`/properties/${id}`}>
                Details
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </Button>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}