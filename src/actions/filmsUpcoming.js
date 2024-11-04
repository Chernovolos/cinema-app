import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "4119ec024ca3a9786101810fb0128aa2";
export const getUpcomingFilms = createAsyncThunk(
    "upcomingFilms/getUpcomingFilms",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );
            return response.data.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);