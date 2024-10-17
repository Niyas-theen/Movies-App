// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, fetchMovies, type, setType }) => {
    return (
        <div className="flex items-center mb-4">
            <input
                type="text"
                className="border border-gray-300 rounded p-2 mr-2 flex-grow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie..."
            />
            <select
                className="border border-gray-300 rounded p-2 mr-2"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="movie">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episodes</option>
            </select>
            <button
                className="bg-blue-500 text-white rounded px-4 py-2"
                onClick={fetchMovies}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
