import client from "@/lib/apollo-client";
import { GET_MOVIE } from "@/graphql/queries/getMovie";

export async function fetchMovie(movieId: string) {
  const { data } = await client.query({
    query: GET_MOVIE,
    variables: { movieId: movieId },
  });
  return data.movie;
}
