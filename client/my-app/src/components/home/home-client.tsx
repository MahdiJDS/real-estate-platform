"use client";

import { useProperties } from "@/hook/useProperties";
import SearchBar from "./search-bar";
import Hero from "./hero";
import FeaturedProperties from "./featured-properties";

export default function HomeClient({
    initialFilters,
}: any) {
    const { data , isLoading , error } = useProperties(initialFilters);

    return (
        <div className="space-y-10">
            <Hero />

            <SearchBar />

            <FeaturedProperties data={data} isLoading={isLoading} error={error}/>

        </div>
    );
}