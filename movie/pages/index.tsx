import { useEffect, useState } from "react";
import { SCROLL_CONTAINER_STYLE } from '@/constants/index';
import { MOVIE_ID, API_URL, TMDB_API_TOKEN} from '@/configurations/index';
import AuthWarning from '@/components/AuthWarning';
import StatusMessage from '@/components/StatusMessage';
import RecommendationList  from '@/components/RecommendationList';

export default function Home() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {

    if (String(TMDB_API_TOKEN).length === 0) {
        setError("Configuration Error: Please replace the placeholder API key in App.tsx.");
        return;
    }

    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const options: RequestInit = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      };

      const response = await fetch(API_URL, options);

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Unknown API error.';
        try {
            const errorJson = JSON.parse(errorText);
            errorMessage = errorJson.status_message || errorMessage;
        } catch {
            errorMessage = errorText;
        }
        
        throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorMessage}`);
      }

      const data: ApiResponse = await response.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results);
      } else {
        setError('No recommendations found for this movie.');
      }

    } catch (err) {
      const message = (err as Error).message;
      setError(`Error fetching data: ${message}`);

      if (message.includes('401')) {
          setError((prev) => `${prev} <br/> <span class="font-bold">Authentication Failed (401). Please verify your TMDB Bearer Token!</span>`);
      }
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchRecommendations();
  }, []);


  const isPlaceholderToken = String(TMDB_API_TOKEN) === '';

  return (
        <>
      <style>{SCROLL_CONTAINER_STYLE}</style>
      <div className="min-h-screen p-4 flex items-start justify-center bg-[#0d1117] font-[Inter]">
        <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-xl shadow-2xl mt-12">
          
          <h1 className="text-3xl font-extrabold text-white mb-2 border-b-2 border-sky-500 pb-2">
            Movie Recommendation App
          </h1>
          
          {isPlaceholderToken && <AuthWarning />}

          <p className="text-gray-400 mb-6">
            Recommendations for You.
          </p>

          <button
            onClick={fetchRecommendations}
            disabled={loading || isPlaceholderToken}
            className="w-full sm:w-auto px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white cursor-pointer font-semibold rounded-lg transition duration-200 shadow-md shadow-sky-900/50 mb-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {loading ? 'Fetching...' : 'Refetch Recommendations'}
          </button>

          <div className="text-lg text-center font-medium my-4">
            <StatusMessage 
                loading={loading} 
                error={error} 
                movieCount={movies.length} 
            />
          </div>

          <RecommendationList movies={movies} />

        </div>
      </div>
    </>
  );
}
