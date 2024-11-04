import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4119ec024ca3a9786101810fb0128aa2";
export const getCurrentFilms = createAsyncThunk(
    "films/getCurrentFilms",
    async ({ search = "star wars", genre = "" }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            return  response.data.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


