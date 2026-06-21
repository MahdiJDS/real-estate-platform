import { getProperties } from "@/services/properties.service";
import HomeClient from "@/components/home/home-client";
import { PropertyFilters } from "@/types/propertyfilters";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = await searchParams;
  const queryClient = new QueryClient();

  const filters = {
    city: params.city,
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    sort: params.sort as PropertyFilters["sort"],
  };

  await queryClient.prefetchQuery({
    queryKey: ["properties", filters],
    queryFn: () => getProperties(filters),
  });

  return <HomeClient dehydratedState={dehydrate(queryClient)} initialFilters={filters} />;
}