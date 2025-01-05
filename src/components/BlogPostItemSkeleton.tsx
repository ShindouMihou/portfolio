"use client";

export default function BlogPostItemSkeleton() {
    return (
        <div className={"flex flex-row items-center gap-4 animate-pulse"}>
            <p className={"text-xl text-yellow-500"}>•</p>
            <div className={"flex flex-col gap-1"}>
                <div className={"bg-gray-300 h-3 w-64 rounded"}></div>
            </div>
        </div>
    )
}