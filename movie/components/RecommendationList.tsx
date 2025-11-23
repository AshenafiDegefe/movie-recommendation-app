import React from 'react';
import MovieCard from './MovieCard';

const RecommendationList: React.FC<RecommendationListProps> = ({ movies }) => (
    <div className="flex flex-nowrap gap-4 scroll-container overflow-x-auto pb-4">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
);
export default RecommendationList;