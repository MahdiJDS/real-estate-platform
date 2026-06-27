import { PropertyFilters } from "@/types/propertyfilters";
import PropertyCard from "../property/property-card";
import { ErrorState } from "../shared/errorState";
import EmptySearch from "../shared/emptySearch";
import SkeletonCard from "../shared/property-skeleton";


type Props = {
    data: PropertyFilters[];
    isLoading: boolean;
    error: Error | null;
};

export default function FeaturedProperties({ data, isLoading, error }: Props) {

    if (isLoading) return <SkeletonCard />
    if (error) return <ErrorState />
    if(data.length === 0) return <EmptySearch />

    return (
        <section className="space-y-6 w-full flex justify-content-center flex-col items-center">

            <h2 className="text-2xl font-bold">
                Featured Properties
            </h2>

            <div className="w-full grid md:grid-cols-3 gap-4">

                {data.map((p: any) => (
                    <PropertyCard key={p.id} {...p} />
                ))}

            </div>

        </section>
    );
}