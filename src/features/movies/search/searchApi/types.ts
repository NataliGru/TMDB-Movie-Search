export interface MovieApi {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesSearchResponseApi {
  page: number;
  results: MovieApi[];
  total_pages: number;
  total_results: number;
}

export interface SearchMoviesParamsApi {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  page: string;
  region?: string;
  year?: string;
}

export interface LanguageApi {
  iso_639_1: string;
  english_name: string;
  name: string;
}

export interface GenreApi {
  id: number;
  name: string;
}

export interface CountriesApi {
  iso_3166_1: string;
  english_name: string;
  native_name: string;
}
