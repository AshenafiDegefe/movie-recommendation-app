import React from 'react';
import { BASE_IMAGE_URL } from '@/configurations';


const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : 'https://placehold.co/300x450/1f2937/cbd5e1?text=No+Poster';
  
  const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A';
  const rating = movie.vote_average.toFixed(1);

  return (
    <div className="flex shrink-0 w-40 bg-gray-700 rounded-lg shadow-xl overflow-hidden transition duration-300 hover:scale-[1.02] cursor-pointer">
      <img
        src={posterUrl}
        alt={`${movie.title} Poster`}
        className="w-full h-auto object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.onerror = null; 
          e.currentTarget.src = 'https://placehold.co/300x450/1f2937/cbd5e1?text=Image+Load+Failed';
        }}
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white truncate" title={movie.title}>
          {movie.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">{releaseYear}</p>
        <span className="inline-block mt-2 text-xs font-bold text-yellow-400 bg-gray-600 px-2 py-0.5 rounded-full">
          ⭐ {rating}
        </span>
      </div>
    </div>
  );
};
export default MovieCard;