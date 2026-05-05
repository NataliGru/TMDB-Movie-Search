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

export interface SearchMoviesParams {
  query: string;
  includeAdult?: boolean;
  language?: string;
  primaryReleaseYear?: string;
  page?: number;
  region?: string;
  year?: string;
}

export interface LanguageApi {
  iso_639_1: string;
  english_name: string;
  name: string;
}
