import { gql } from "@apollo/client";

export const GET_MOVIE = gql`
  query GetMovie($movieId: ID!) {
    movie(id: $movieId) {
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
