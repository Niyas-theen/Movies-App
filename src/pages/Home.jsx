// src/pages/Home.js
import React, { useState } from 'react';
import { searchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('movie');
    const [error, setError] = useState('');

    const fetchMovies = async () => {
        setError('');
        try {
            const result = await searchMovies(searchTerm, type);
            if (result.Response === 'False') {
                setError(result.Error);
                setMovies([]);
            } else {
                setMovies(result.Search);
            }
        } catch (error) {
            setError('Failed to fetch movies. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                fetchMovies={fetchMovies}
                type={type}
                setType={setType}
            />
            {error && <p className="text-red-500">{error}</p>}
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;
