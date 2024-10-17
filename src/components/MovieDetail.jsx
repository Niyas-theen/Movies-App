// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const result = await getMovieDetails(id);
                if (result.Response === 'False') {
                    setError(result.Error);
                } else {
                    setMovie(result);
                }
            } catch (error) {
                setError('Failed to fetch movie details. Please try again.');
            }
        };
        fetchMovieDetail();
    }, [id]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!movie) return <div className="text-gray-500">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img src={movie.Poster} alt={movie.Title} className="w-1/2 mb-4 md:mr-4" />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{movie.Title}</h1>
                    <p className="text-gray-600"><strong>Year:</strong> {movie.Year}</p>
                    <p className="text-gray-600"><strong>Genre:</strong> {movie.Genre}</p>
                    <p className="text-gray-600"><strong>Plot:</strong> {movie.Plot}</p>
                    <p className="text-gray-600">
                        <strong>Ratings:</strong> {movie.Ratings.map((rating) => (
                            <span key={rating.Source}>{rating.Source}: {rating.Value} </span>
                        ))}
                    </p>
                    <p className="text-gray-600"><strong>Cast:</strong> {movie.Actors}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
