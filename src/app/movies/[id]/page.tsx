import { fetchMovie } from "@/services/fetchMovie";
import { Movie } from "@/types";
import Image from "next/image";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data: Movie = await fetchMovie(id);

  return (
    <div>
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center blur-md"
        style={{
          backgroundImage: `url(${data?.featured_image})`,
        }}
      />
      <div className="bg-gradient-to-t from-black/70 via-black/20 to-black/70">
        <div className="max-w-screen-lg mx-auto py-32 grid grid-cols-[max-content_1fr] gap-6">
          <div className="relative w-[250px] aspect-[11/16] px-4 sm:px-8">
            <Image
              src={data?.featured_image}
              alt="poster"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-3xl mb-1 text-white font-semibold z-20 relative">
              {data?.title}
            </div>

            <div className="text-neutral-400 mb-2">{data?.released_year}</div>

            <div className="text-sm mb-4 font-semibold text-neutral-300">
              120 min | Family, Fantasy
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-1 text-xl items-center text-yellow-500">
                <div className="text-2xl">&#9733;</div>
                <div className="font-bold text-neutral-200">
                  {data?.imdb_score}
                </div>
              </div>

              <Image src="/imdb.svg" alt="imdb" width={50} height={30} />
            </div>

            <div className="text-neutral-200 mb-12 line-clamp-4">
              {data?.description}
            </div>

            <div className="mt-auto flex gap-8">
              <button className="h-11 px-12 bg-blue-600 hover:bg-blue-700 transition rounded-md text-neutral-50 font-semibold">
                Watch
              </button>
              <button className="h-11 px-12 bg-blue-600 hover:bg-blue-700 transition rounded-md text-neutral-50 font-semibold">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
