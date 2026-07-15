import { api } from "@/lib/axios";

export async function updateProperty(
    id: number,
    data: FormData
) {
    const response = await api.patch(
        `/properties/${id}`,
        data
    );

    return response.data;
}