export default function Loading() {
  const placeholderCards = Array.from({ length: 8 });

  return (
    <div className="my-12">
      <ul className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {placeholderCards.map((_, index) => (
          <li key={index} className="animate-pulse">
            <div className="relative aspect-[11/16] bg-neutral-300 dark:bg-neutral-700 rounded-xl overflow-hidden"></div>
            <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-md mt-2"></div>
            <div className="flex justify-between items-center mt-2">
              <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-md w-12"></div>
              <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded-md w-8"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
