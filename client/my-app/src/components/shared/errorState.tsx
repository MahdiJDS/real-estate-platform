export function ErrorState({ message }: { message?: string }) {
    return (
        <div className="flex justify-center py-20">
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                <p className="text-red-700 font-medium">Error</p>
                <p className="text-sm text-red-600 mt-2">
                    {message || "Something went wrong"}
                </p>
            </div>
        </div>
    );
}