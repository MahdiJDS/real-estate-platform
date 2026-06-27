import Image from "next/image";

interface Props {
    imageUrl: string | null;
}

export default function PropertyGallery({
    imageUrl,
}: Props) {
    return (
        <div className="overflow-hidden rounded-3xl">
            <Image
                src={imageUrl || "/placeholder.jpg"}
                alt="property"
                width={1400}
                height={700}
                className="h-120 w-full object-cover"
            />
        </div>
    );
}