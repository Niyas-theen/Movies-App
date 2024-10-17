// src/api.js
import axios from 'axios';

const API_KEY = '8b9ff39b'; // Replace with your actual OMDB API key
const BASE_URL = 'http://www.omdbapi.com/';

// Function to search for movies
export const searchMovies = async (searchTerm, type) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                s: searchTerm,
                type: type,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
};

// Function to get movie details by IMDb ID
export const getMovieDetails = async (id) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                i: id,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movie details');
    }
};
