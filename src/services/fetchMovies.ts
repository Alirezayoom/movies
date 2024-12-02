import client from "@/lib/apollo-client";
import { GET_MOVIES } from "@/graphql/queries/getMovies";

export async function fetchMovies() {
  const { data } = await client.query({
    query: GET_MOVIES,
  });
  return data.movies;
}
