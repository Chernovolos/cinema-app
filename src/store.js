import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from "./reducers/filmReducer.js";
import filmDetails from "./reducers/filmDetails.js";
import ticketSlice from "./reducers/ticketPageReducer";
import filmsUpcoming from "./reducers/filmUpcominfFilms";
import filmsPageReducer from "./reducers/filmsPageReducer.js";
import feedbackReducer from "./reducers/feedbackReducer.js";
export const store = configureStore({
    reducer: {
        films: filmsSlice,
        filmDetails: filmDetails,
        filmsUpcoming: filmsUpcoming,
        ticketPage: ticketSlice,
        filmsPageSlice: filmsPageReducer,
        feedbackSlice: feedbackReducer,
    },
})
