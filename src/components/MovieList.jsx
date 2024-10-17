// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    if (!movies.length) return <p className="text-gray-500">No movies found.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="bg-white rounded shadow-md p-4">
                    <Link to={`/movie/${movie.imdbID}`}>
                        <img src={movie.Poster} alt={movie.Title} className="mb-2" />
                        <h3 className="font-semibold">{movie.Title}</h3>
                        <p className="text-gray-600">{movie.Year}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
