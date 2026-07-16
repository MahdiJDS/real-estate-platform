"use client";

import SkeletonCard from "@/components/shared/loadingState";
import { useMyProperties } from "../hooks/useMyProperties";
import { ErrorState } from "@/components/shared/errorState";
import EmptySearch from "@/components/shared/emptySearch";
import { MyPropertyCard } from "./MyPropertyCard";

export function MyProperties() {
    const {
        data: properties,
        isPending,
        isError,
    } = useMyProperties();

    if (isPending) {
        return <SkeletonCard />;
    }

    if (isError) {
        return <ErrorState />;
    }

    if (!properties?.length) {
        return <EmptySearch />;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
                <MyPropertyCard
                    key={property.id}
                    property={property}
                />
            ))}
        </div>
    );
}