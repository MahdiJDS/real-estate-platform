import toast from "react-hot-toast";

import { Property } from "@/types/property.type";

export async function handleShare(property: Property) {
    const url = window.location.href;

    try {
        if (navigator.share) {
            await navigator.share({
                title: property.title,
                text: property.description,
                url,
            });

            return;
        }

        if (navigator.clipboard) {
            await navigator.clipboard.writeText(url);

            toast.success("Property link copied to clipboard!");

            return;
        }

        toast.error("Sharing is not supported on this device.");
    } catch (error) {
        console.error(error);

        toast.error("Failed to share property.");
    }
}