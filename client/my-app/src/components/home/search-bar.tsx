"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");

  const handleSearch = () => {
    console.log({
      city,
      minPrice,
    });

   
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto">

      <Input
        placeholder="City (e.g. Tehran)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <Input
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <Button onClick={handleSearch}>
        Search
      </Button>

    </div>
  );
}