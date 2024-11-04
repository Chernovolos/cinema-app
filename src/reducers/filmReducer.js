import { createSlice } from "@reduxjs/toolkit";
import { getCurrentFilms } from "../actions/filmsActions";

const filmsSlice = createSlice({
    name: "films",
    initialState: {
        preloader: false,
        films: [],
        error: null,
        filter: null,
        selectedFilm: null,
        cinemaDays: null,
        filmType: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentFilms.pending, (state) => {
                state.preloader = true;
                state.error = null;
            })
            .addCase(getCurrentFilms.fulfilled, (state, action) => {
                state.preloader = false;
                state.films = action.payload;
            })
            .addCase(getCurrentFilms.rejected, (state, action) => {
                state.preloader = false;
                state.error = action.payload;
                state.films = [];
            });
    },
});

export default filmsSlice.reducer;