interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
}

interface ApiResponse {
  results: Movie[];
}

interface MovieCardProps {
  movie: Movie;
}

interface StatusMessageProps {
    loading: boolean;
    error: string | null;
    movieCount: number;
}

interface RecommendationListProps {
    movies: Movie[];
}