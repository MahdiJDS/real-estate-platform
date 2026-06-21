import { api } from "@/lib/axios";
import { PropertyFilters } from "@/types/propertyfilters";

export const getProperties = async (filters: PropertyFilters) => {
    const { data } = await api.get("/properties", {
        params: filters,
    });

    return data;
};