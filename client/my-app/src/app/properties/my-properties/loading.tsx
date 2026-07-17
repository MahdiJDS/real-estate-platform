import SkeletonCard from "@/components/shared/loadingState";

export default function Loading() {
    return (
        <div className="p-5 flex items-center justify-center">
            <SkeletonCard />
        </div>
    )
}