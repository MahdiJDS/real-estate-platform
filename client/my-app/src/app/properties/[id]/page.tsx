import PropertyGallery from "@/components/property/property-gallery";
import PropertyDetails from "@/components/property/property-details";
import PropertySidebar from "@/components/property/property-sidebar";

import { getPropertyById } from "@/services/property.service";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function PropertyPage({
    params,
}: Props) {
    const { id } = await params;

    const property = await getPropertyById(id);

    return (
        <section className="container mx-auto py-10">

            <div className="space-y-8">



                <div className="grid lg:grid-cols-[2fr_400px] items-center gap-10">


                    <PropertyGallery
                        imageUrl={property.imageUrl}
                    />
                    <PropertySidebar
                        property={property}
                    />

                </div>
                <PropertyDetails
                    property={property}
                />

            </div>

        </section>
    );
}