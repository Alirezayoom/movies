export type MenuItem = {
  id: number;
  name: string;
  link: string;
};

export type Movie = {
  id: string;
  poster_path: string;
  name: string;
  original_title: string;
  release_date: string;
  vote_average: number;
};

export type Movies = {
  data: Movie[];
};
