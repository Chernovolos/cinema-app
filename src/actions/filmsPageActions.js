import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4119ec024ca3a9786101810fb0128aa2";
export const searchMovies = createAsyncThunk(
    "movies/search",
    async (query = "star wars") => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        return response.data.results;
    }
);
export const getMoviesByGenre = createAsyncThunk(
    "movies/fetchByGenre",
    async (genreId) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
        return response.data.results;
    }
);


