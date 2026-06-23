export default function EmptySearch() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border bg-background text-background py-20 px-6 text-center">
      <div className="text-5xl">🔍</div>

      <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-zinc-200">
        No results found
      </h2>

      <p className="mt-2 text-gray-500">
        We couldn’t find anything matching your search. Try changing your filters.
      </p>

    </div>
  );
}