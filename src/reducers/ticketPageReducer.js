import { createSlice } from '@reduxjs/toolkit';
import { HALLS_DATA } from '../models/mocks';
import { buyTicket } from "../actions/ticketActions.js";

const initialState = {
    preloader: false,
    hall: HALLS_DATA[0],
    error: null,
    isTicketBought: false,
    serverAnswer: null,
};

// Slice
const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        clearTicketPage: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(buyTicket.pending, (state) => {
                state.preloader = true;
                state.error = null;
            })
            .addCase(buyTicket.fulfilled, (state, action) => {
                state.preloader = false;
                state.serverAnswer = action.payload;
                state.isTicketBought = true;
            })
            .addCase(buyTicket.rejected, (state, action) => {
                state.preloader = false;
                state.error = action.payload;
            });
    },
});

export const { clearTicketPage } = ticketSlice.actions;
export default ticketSlice.reducer;



