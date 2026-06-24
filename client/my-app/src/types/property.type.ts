export interface Property {
  id: number;

  title: string;
  description: string;

  city: string;
  address: string;

  price: number;

  bedrooms: number;
  bathrooms: number;
  area: number;

  imageUrl: string | null;

  owner: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}