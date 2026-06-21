import { Card } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  title: string;
  city: string;
  price: number;
  imageUrl: string;
};

export default function PropertyCard({
  title,
  city,
  price,
  imageUrl,
}: Props) {
  return (
    <Card className="overflow-hidden w-full p-4 space-y-2 hover:-translate-y-1 hover:shadow-lg transition">
      <div className="relative h-50 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-muted-foreground">
        {city}
      </p>

      <p className="font-bold">
        ${price}
      </p>
    </Card>
  );
}