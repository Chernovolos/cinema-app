import { createSlice } from "@reduxjs/toolkit";
import { getDetailsFilm } from "../actions/filmDetailsActions";

const filmDetails = createSlice({
    name: 'filmDetails',
    initialState: {
        film: null,
        loading: false,
        error: null,
        filmType: false
    },
    reducers: {
        setFilmType(state, action) {
            state.filmType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDetailsFilm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDetailsFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.film = action.payload;
            })
            .addCase(getDetailsFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setFilmType } = filmDetails.actions;
export default filmDetails.reducer;
