"use client";

import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/services/properties.service";
import { PropertyFilters } from "@/types/propertyfilters";

export function useProperties(filters: PropertyFilters) {
    return useQuery({
        queryKey: ["properties", filters],
        queryFn: () => getProperties(filters),
    });
}