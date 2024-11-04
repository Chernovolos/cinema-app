import { createSlice } from "@reduxjs/toolkit";
import { getUpcomingFilms } from "../actions/filmsUpcoming";

const filmsUpcomingSlice = createSlice({
    name: "filmsUpcoming",
    initialState: {
        preloader: false,
        filmsUpcoming: [],
        error: null,
        filter: null,
        selectedFilm: null,
        cinemaDays: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUpcomingFilms.pending, (state) => {
                state.preloader = true;
                state.error = null;
            })
            .addCase(getUpcomingFilms.fulfilled, (state, action) => {
                state.preloader = false;
                state.filmsUpcoming = action.payload;
            })
            .addCase(getUpcomingFilms.rejected, (state, action) => {
                state.preloader = false;
                state.error = action.payload;
                state.filmsUpcoming = [];
            });
    },
});

export default filmsUpcomingSlice.reducer;