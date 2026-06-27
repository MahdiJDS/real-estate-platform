export interface CreatePropertyDto {
    title: string;

    description: string;

    city: string;

    address: string;

    price: number;

    area: number;

    bedrooms: number;

    bathrooms: number;

    image: File | null;
}