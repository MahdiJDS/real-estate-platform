"use client";

import { useQuery } from "@tanstack/react-query";
import { getMyProperties } from "../services/getMyProperties.service";

export function useMyProperties() {
    return useQuery({
        queryKey: ["my-properties"],
        queryFn: getMyProperties,
    });
}