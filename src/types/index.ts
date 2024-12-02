export type MenuItem = {
  id: number;
  name: string;
  link: string;
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  genre: string;
  imdb_score: string;
  video_url: string;
  featured_image: string;
  released_year: number;
  __typename: string;
};

export type Movies = {
  data: Movie[];
};
