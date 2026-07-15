import { api } from "@/lib/axios";

export async function deleteProperty(id: number) {
    const response = await api.delete(`/properties/${id}`);

    return response.data;
}