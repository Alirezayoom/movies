export default function Loading() {
  return (
    <div>
      <div className="absolute inset-0 -z-10"></div>

      <div className="">
        <div className="max-w-screen-lg mx-auto py-32 grid grid-cols-[max-content_1fr] gap-6">
          <div className="relative w-[250px] aspect-[11/16] bg-neutral-600 animate-pulse rounded-lg px-4 sm:px-8"></div>

          <div>
            <div className="h-8 bg-neutral-600 animate-pulse rounded mb-2 w-3/4"></div>

            <div className="h-5 bg-neutral-600 animate-pulse rounded mb-2 w-1/4"></div>

            <div className="h-4 bg-neutral-600 animate-pulse rounded mb-4 w-1/2"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="h-6 w-20 bg-neutral-600 animate-pulse rounded"></div>
              <div className="h-8 w-12 bg-neutral-600 animate-pulse rounded"></div>
            </div>

            <div className="space-y-2 mb-12">
              <div className="h-4 bg-neutral-600 animate-pulse rounded w-full"></div>
              <div className="h-4 bg-neutral-600 animate-pulse rounded w-5/6"></div>
              <div className="h-4 bg-neutral-600 animate-pulse rounded w-3/4"></div>
            </div>
            <div className="mt-auto flex gap-8">
              <div className="h-11 w-32 bg-neutral-600 animate-pulse rounded"></div>
              <div className="h-11 w-32 bg-neutral-600 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
