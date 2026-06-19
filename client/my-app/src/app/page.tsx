import Hero from "@/components/home/hero";
import SearchBar from "@/components/home/search-bar";
import FeaturedProperties from "@/components/home/featured-properties";

export default function HomePage() {
  return (
    <div className="space-y-16">

      <Hero />

      <SearchBar />

      <FeaturedProperties />

    </div>
  );
}