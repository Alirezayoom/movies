import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      description
      genre
      imdb_score
      video_url
      featured_image
      released_year
    }
  }
`;
