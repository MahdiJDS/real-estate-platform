"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PropertyFilterForm,
  propertyFilterSchema,
} from "@/schema/search-bar.schema";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const { register,
    handleSubmit,
    setValue,
    formState: { errors }, } =
    useForm({
      resolver: zodResolver(propertyFilterSchema),
    });

  const onSubmit = (data: PropertyFilterForm) => {
    const query = new URLSearchParams();

    if (data.city) query.set("city", data.city);

    if (data.minPrice !== undefined)
      query.set("minPrice", String(data.minPrice));

    if (data.maxPrice !== undefined)
      query.set("maxPrice", String(data.maxPrice));

    if (data.sort) {
      query.set("sort", data.sort)
    } else {
      query.set("sort", "newset")
    };

    router.push(`/?${query.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-4 gap-3 p-4 w-full rounded-xl shadow bg-background text-foreground"
    >
      <div className="space-y-1">
        <Input
        type="text"
          placeholder="City"
          {...register("city")}
          className={cn(
            "bg-transparent",
            errors.city && "border-red-500"
          )}
        />
        {errors.city && (
          <p className="text-sm text-red-500">
            {errors.city.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          type="number"
          placeholder="Min Price"
          {...register("minPrice", {
            setValueAs: (v) =>
              v === "" ? undefined : Number(v),
          })}
          className={cn(
            "bg-transparent",
            errors.minPrice && "border-red-500"
          )}
        />
        {errors.minPrice && (
          <p className="text-sm text-red-500">
            {errors.minPrice.message || "Invalid min price"}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <Input
          type="number"
          placeholder="Max Price"
          {...register("maxPrice", {
            setValueAs: (v) =>
              v === "" ? undefined : Number(v),
          })}
          className={cn(
            "bg-transparent",
            errors.maxPrice && "border-red-500"
          )}
        />
        {errors.maxPrice && (
          <p className="text-sm text-red-500">
            {errors.maxPrice.message || "Invalid max price"}
          </p>
        )}
      </div>

      <Select
        onValueChange={(value) =>
          setValue("sort", value as PropertyFilterForm["sort"])
        }
        defaultValue={params.get("sort") || "newest"}
      >
        <SelectTrigger>
          <SelectValue placeholder="Sort" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
          <SelectItem value="priceAsc">Price ↑</SelectItem>
          <SelectItem value="priceDesc">Price ↓</SelectItem>
        </SelectContent>
      </Select>

      <Button className="md:col-span-4 bg-black text-white
dark:bg-white dark:text-black">
        Search Properties
      </Button>
    </form>
  );
}