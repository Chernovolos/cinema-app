import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4119ec024ca3a9786101810fb0128aa2";
export const getDetailsFilm = createAsyncThunk(
    "filmDetails/getCurrentFilm",
    async (id = 0, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
