import { api } from "@/lib/axios";
import { Property } from "@/types/property.type";

export async function getMyProperties(): Promise<Property[]> {
    const response = await api.get("/properties/my");

    return response.data;
}