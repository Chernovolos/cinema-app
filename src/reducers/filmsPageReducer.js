import {createSlice} from "@reduxjs/toolkit";
import {getMoviesByGenre, searchMovies} from "../actions/filmsPageActions.js";

const filmPageSlice = createSlice({
    name: "filmsPage",
    initialState: {
        list: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = "succeeded";
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = "succeeded";
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            })
            .addCase(getMoviesByGenre.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "failed";
            });
    },
});

export default filmPageSlice.reducer;