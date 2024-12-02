import MovieCard from "@/components/common/movie-card";
import { fetchMovies } from "@/services/fetchMovies";
import { Movie } from "@/types";

export default async function MoviesPage() {
  const data = await fetchMovies();

  return (
    <div className="my-12">
      <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-4 sm:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
        {data.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
