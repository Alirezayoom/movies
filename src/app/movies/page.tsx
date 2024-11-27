import MovieCard from "@/components/common/movie-card";
import { Movies } from "@/types";
import { config } from "@/config";

export default async function MoviesPage() {
  const response = await fetch(`${config.apiUrl}/movies/paginated`, {
    cache: "no-store",
  });
  const { data }: Movies = await response.json();

  return (
    <div className="my-12">
      <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
