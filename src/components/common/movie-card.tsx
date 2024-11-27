import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types";
import { PlayIcon } from "@/icons";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href="/" className="inline-block">
      <div className="relative aspect-[11/16] group rounded-xl overflow-hidden">
        <div
          className="opacity-0 group-hover:opacity-100 transition duration-200 
        absolute top-0 left-0 w-full h-full bg-black/60 z-10
        flex justify-center items-center"
        >
          <div className="border-2 border-white scale-125 group-hover:scale-100 transition-all duration-200 rounded-full w-20 h-20 flex items-center justify-center">
            <PlayIcon className="w-12 h-12 text-white " />
          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-neutral-500 animate-pulse"></div>
        <Image src={movie?.poster_path} alt={movie?.name} fill />
      </div>
      <div className="text-neutral-900 dark:text-neutral-200 text-sm mt-2 font-bold line-clamp-1">
        {movie?.original_title}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-neutral-500">
          {movie?.release_date.slice(-4)}
        </div>
        <div className="flex gap-1 items-center text-yellow-500">
          <div className="">&#9733;</div>
          <div className="text-sm font-bold">{movie?.vote_average}</div>
        </div>
      </div>
    </Link>
  );
}