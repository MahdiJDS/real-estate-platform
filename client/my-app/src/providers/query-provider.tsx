"use client";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { ReactNode } from "react";

const queryClient = new QueryClient();

type Props = {
  children: ReactNode;
  dehydratedState: any
};

export default function QueryProvider({
  children,
  dehydratedState
}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        {children}
      </HydrationBoundary>
    </QueryClientProvider >
  );
}