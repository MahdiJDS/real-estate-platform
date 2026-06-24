import { api } from "@/lib/axios";
import { Property } from "@/types/property.type";

export async function getPropertyById(
  id: string
): Promise<Property> {
  const { data } = await api.get(`/properties/${id}`);

  return data;
}