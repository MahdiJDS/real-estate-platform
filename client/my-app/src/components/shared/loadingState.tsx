export function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
            <p className="mt-4 text-gray-500 text-sm">Loading...</p>
        </div>
    );
}