import { api } from "@/lib/axios";
import { CreatePropertyDto } from "@/types/CreatePropertyDto.type";

export async function createProperty(data: CreatePropertyDto) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    if (value instanceof File) {
      formData.append(key, value);
    } else {
      formData.append(key, String(value));
    }
  });

  const response = await api.post("/properties", formData);

  return response.data;
}